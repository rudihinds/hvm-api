const fs = require("fs");
const path = require("path");
const { Sema } = require("async-sema");
const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: "eu-west-1",
  accessKeyId: "fakeaccess",
  secretAccessKey: "fakesecret",
  endpoint: "http://localhost:8000",
});

const NUMBEO_API_KEY = process.env.NUMBEO_API_KEY;
const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();
const baseCurrency = "USD";
const sema = new Sema(5); // Limit concurrency to 5 requests at a time

// create CityPrices table, and add all cities' data from cities+5m.json

const createTableParams = {
  TableName: "CitiesPrices",
  KeySchema: [{ AttributeName: "cityCountry", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "cityCountry", AttributeType: "S" }],
  ProvisionedThroughput: {
    // will need to be considered for launch, or move to pay as you go to get an idea first three months.
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "newCities.json"
);

const insertCityData = async (cities) => {
  const chunks = [];
  for (i = 0; i < cities.length; i += 25) {
    chunks.push(cities.slice(i, i + 25));
  }

  for (const chunk of chunks) {
    let uniqueCityCountries = new Set();
    let putRequests = [];
    for (const cityObj of chunk) {
      const {
        name,
        currency,
        contributors12months,
        monthLastUpdate,
        contributors,
        yearLastUpdate,
        prices,
        usdPrices,
        city_id,
      } = cityObj;
      const [city, country] = name.split(", ");
      if (uniqueCityCountries.has(name)) {
        console.warn(`Skipping duplicate cityCountry: ${name}`);
        continue;
      }
      uniqueCityCountries.add(name);
      putRequests.push({
        PutRequest: {
          Item: {
            cityCountry: name,
            city,
            country,
            currency,
            contributors12months,
            monthLastUpdate,
            contributors,
            yearLastUpdate,
            prices,
            usdPrices,
            numbeoCityId: city_id,
          },
        },
      });
    }

    const params = {
      RequestItems: {
        CitiesPrices: putRequests,
      },
    };

    try {
      const response = await docClient.batchWrite(params).promise();
      const unprocessedItems =
        response.UnprocessedItems && response.unprocessedItems.CitiesPrices
          ? response.unprocessedItems.CitiesPrices.length
          : 0;
      console.log(
        `Processed batch of ${putRequests.length} items, ${unprocessedItems} unprocessed`
      );
    } catch (err) {
      console.error("Error in batchWrite:", JSON.stringify(err, null, 2));
    }
  }
};

const getBaseExchangeRate = async (fromCurrency) => {
  if (!fromCurrency) {
    console.error("Currency is undefined");
    return;
  }
  var xRatesUrl = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${baseCurrency}`;
  try {
    const res = await fetch(xRatesUrl);
    const data = await res.json();
    if (data.success) {
      return data.result;
    } else {
      throw Error(`error making api call to convert ${fromCurrency} to USD`);
    }
  } catch (err) {
    console.error(err);
  }
};

// create country item with same attributes but add a usdprices field which uses exchange rate to get prices converted to usd.
const createPricesObjectAndWriteToDb = () => {
  fs.readFile(jsonFilePath, null, async (err, data) => {
    if (err) console.log(err);
    const citiesData = JSON.parse(data);

    let finalCityItems = [];
    try {
      for (const cityObj of citiesData.cities) {
        const { city, country } = cityObj;
        await sema.acquire();
        try {
          const res = await fetch(
            `https://www.numbeo.com/api/city_prices?api_key=z8dasdlhhu49hk&city=${city}&country=${country}`
          );

          if (res.ok) {
            const priceObj = await res.json();
            console.log(`priceObj for ${city}, ${country}:`, priceObj);
            const baseExchangeRate = await getBaseExchangeRate(
              priceObj.currency
            );
            if (!baseExchangeRate) {
              console.error("Failed to get exchange rate for:", priceObj.name);
              continue; // Skip this iteration
            }
            const newCityObj = {
              ...priceObj,
              usdPrices:
                priceObj && priceObj.prices.length
                  ? priceObj.prices.map((itemPrice) => {
                      if (itemPrice.lowest_price) {
                        itemPrice.lowest_price =
                          itemPrice.lowest_price * baseExchangeRate;
                      }
                      if (itemPrice.highest_price) {
                        itemPrice.highest_price =
                          itemPrice.highest_price * baseExchangeRate;
                      }
                      if (itemPrice.average_price) {
                        itemPrice.average_price =
                          itemPrice.average_price * baseExchangeRate;
                      }
                      return itemPrice;
                    })
                  : [],
            };
            writeCityPriceDataToJson(newCityObj);
            finalCityItems = [...finalCityItems, newCityObj];
            console.log(
              `Fetched and processed data for ${city}, ${country}`,
              newCityObj
            );
          }
        } catch (err) {
          console.log(err);
        } finally {
          sema.release();
        }
      }
    } catch (err) {
      console.error(err);
    }
    fs.writeFile(
      "numbeoCityPricesActual.json",
      JSON.stringify(finalCityItems, null, 2),
      (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Successfully wrote to numbeoCityPricesActual.json");
        }
      }
    );
    insertCityData(finalCityItems);
  });
};

const writeCityPriceDataToJson = (cityData) => {
  fs.readFile("numbeoCityPricesActual.json", function (err, data) {
    if (err) console.log("error reading from numbeoCityPricesActual.json", err);
    try {
      var json = JSON.parse(data);
      json.push(cityData);
      fs.writeFile(
        "numbeoCityPricesActual.json",
        JSON.stringify(json, null, 2),
        function (err) {
          if (err) console.log(err);
          else
            console.log(
              `Successfully wrote data for ${cityData.name} to numbeoCityPricesActual.json`
            );
        }
      );
    } catch (err) {
      console.log(err);
    }
  });
};

dynamoDB.describeTable({ TableName: "CitiesPrices" }, (err, data) => {
  if (err) {
    if (err.code === "ResourceNotFoundException") {
      // Table does not exist, create it
      dynamoDB.createTable(createTableParams, (err, data) => {
        if (err) {
          console.error(
            "Unable to create table:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("Created table:", JSON.stringify(data, null, 2));
          createPricesObjectAndWriteToDb();
        }
      });
    } else {
      console.error("Unable to describe table:", JSON.stringify(err, null, 2));
    }
  } else {
    console.log("Table already exists:", JSON.stringify(data, null, 2));
    createPricesObjectAndWriteToDb();
  }
});
