const fs = require("fs");
const path = require("path");
const { Sema } = require("async-sema");
const AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-1",
  accessKeyId: "fakeaccess",
  secretAccessKey: "fakesecret",
  endpoint: "http://localhost:8000",
});

const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();
const baseCurrency = "USD";

// create cities table, and add all cities' data from cities+5m.json

const createTableParams = {
  TableName: "CountriesPrices",
  KeySchema: [{ AttributeName: "cityId", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "cityId", AttributeType: "N" }],
  ProvisionedThroughput: {
    // will need to be considered for launch, or move to pay as you go to get an idea first three months.
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const data = {
  name: "United States",
  currency: "USD",
  contributors12months: 12659,
  monthLastUpdate: 4,
  contributors: 24748,
  yearLastUpdate: 2023,
  prices: [
    {
      data_points: 2158,
      item_id: 1,
      lowest_price: 11,
      average_price: 20,
      highest_price: 35,
      item_name: "Meal, Inexpensive Restaurant, Restaurants",
    },
  ],
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
  console.log("from", fromCurrency);
  var xRatesUrl = `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${baseCurrency}`;
  console.log('url', xRatesUrl);
  try {
    const res = await fetch(xRatesUrl);
    const data = await res.json();
    if (data.success) {
      console.log('data', data);
      console.log("result", data.result);
      return data.result;
    } else {
      throw Error(`error making api call to convert ${fromCurrency} to USD`);
    }
  } catch (err) {
    console.error(err);
  }
};

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
          const baseExchangeRate = await getBaseExchangeRate(priceObj.currency);
          console.log("base x rate", baseExchangeRate);
          const newPriceObj = {
            ...priceObj,
            usdPrices: priceObj.prices.map((itemPrice) => {
              return {
                ...itemPrice,
                lowest_price: itemPrice.lowest_price * baseExchangeRate,
                average_price: itemPrice.average_price * baseExchangeRate,
                highest_price: itemPrice.highest_price * baseExchangeRate,
              };
            }),
          };
          console.log(newPriceObj);
        }
      } catch (err) {
        console.log(err);
        break;
      } finally {
        sema.release();
      }
    }
  } catch (err) {
    console.log("Breaking out of the loop: ", err.message);
  }
});

// create country item with same attributes but add a usd field which uses exchange rate.
// write usdPrices array which is a mapped prices array which applies exchange rate for every field (check always the same)

// fs.readFile(jsonFilePath, null, async (err, data) => {
//   if (err) console.log(err);
//   const countries = JSON.parse(data).supported_countries;
//   countries.forEach(async (country) => {
//     try {
//       await sema.acquire();
//       const res = await fetch(
//         `https://www.numbeo.com/api/country_prices?api_key=z8dasdlhhu49hk&country=${country}`
//       );
//       if (res.ok) {
//         const priceObj = await res.json();
//         const baseExchangeRate = await getBaseExchangeRate(priceObj.currency);
//         console.log("base x rate", baseExchangeRate);
//         const newPriceObj = {
//           ...priceObj,
//           usdPrices: priceObj.prices.map((itemPrice) => {
//             return {
//               ...itemPrice,
//               lowest_price: itemPrice.lowest_price / baseExchangeRate,
//               average_price: itemPrice.average_price / baseExchangeRate,
//               highest_price: itemPrice.highest_price / baseExchangeRate,
//             };
//           }),
//         };
//         console.log(newPriceObj);
//         throw Error('stop')
//       }
//     } catch (err) {
//       console.log(err);
//       break;
//     } finally {
//       sema.release();
//     }
//   });
// });

// need to write the countries table with partition key of country_name no sort key. will need to add gsi on cities for country lookup
