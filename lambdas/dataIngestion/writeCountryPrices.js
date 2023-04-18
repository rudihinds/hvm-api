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

const createTableParams = {
  TableName: "CountriesPrices",
  KeySchema: [{ AttributeName: "countryName", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "countryName", AttributeType: "S" }],
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
  "numbeo_supported_countries.json"
);

const sema = new Sema(5); // Limit concurrency to 5 requests at a time

// var xRatesUrl = "https://api.exchangerate.host/latest";

const getBaseExchangeRate = async (fromCurrency) => {
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

const insertCountryData = (countryObj) => {
  const {
    currency,
    name,
    contributors12months,
    monthLastUpdate,
    contributors,
    yearLastUpdate,
    prices,
    usdPrices,
  } = countryObj;

  const putParams = {
    TableName: "CountriesPrices",
    Item: {
      countryName: name,
      currency,
      contributors12months,
      monthLastUpdate,
      contributors,
      yearLastUpdate,
      prices,
      usdPrices,
    },
  };

  docClient.put(putParams, (err, data) => {
    if (err) {
      console.error(
        `Unable to add country: ${name}`,
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log("Added city:", JSON.stringify(data, null, 2));
    }
  });
};

// create country item with same attributes but add a usdprices field which uses exchange rate to get prices converted to usd.
const createPricesObjectAndWriteToDb = () => {
  fs.readFile(jsonFilePath, null, async (err, data) => {
    if (err) console.log(err);
    const countries = JSON.parse(data).supported_countries;
    try {
      for (const country of countries) {
        await sema.acquire();
        try {
          const res = await fetch(
            `https://www.numbeo.com/api/country_prices?api_key=z8dasdlhhu49hk&country=${country}`
          );

          if (res.ok) {
            const priceObj = await res.json();
            const baseExchangeRate = await getBaseExchangeRate(
              priceObj.currency
            );
            const countryPriceObj = {
              ...priceObj,
              usdPrices: priceObj.prices.length ? priceObj.prices.map((itemPrice) => {
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
                return itemPrice
              }) : [],
            };
            insertCountryData(countryPriceObj);
          }
        } catch (err) {
          console.log(err);
          break;
        } finally {
          sema.release();
        }
      }
    } catch (err) {
      console.error(err);
    }
  });
};

dynamoDB.describeTable({ TableName: "CountriesPrices" }, (err, data) => {
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