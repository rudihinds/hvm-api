const fs = require("fs");
const path = require("path");
const { Sema } = require("async-sema");
const AWS = require("aws-sdk");

// https://www.npmjs.com/package/currency-exchange-rate uses yahoo finance

AWS.config.update({
  region: "eu-west-1",
  accessKeyId: "fakeaccess",
  secretAccessKey: "fakesecret",
  endpoint: "http://localhost:8000",
});

const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

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

const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "numbeo_supported_countries.json"
);

const sema = new Sema(5); // Limit concurrency to 5 requests at a time

var requestURL = "https://api.exchangerate.host/latest";
// convert var requestURL = "https://api.exchangerate.host/convert?from=USD&to=EUR"; 


const getExchangeRates = async () => {
   const res = await fetch(requestURL)
   const data = await res.json()
   console.log(data);
}

getExchangeRates()

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
//         const prices = await res.json();
//         console.log(prices);
//         throw Error('stop')
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       sema.release();
//     }
//   });
// });

const data = {
  name: 'United States',
  currency: 'USD',
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
      item_name: 'Meal, Inexpensive Restaurant, Restaurants'
    },
]
}

// need to write the countries table with partition key of country_name no sort key. will need to add gsi on cities for country lookup