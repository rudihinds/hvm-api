require = require("esm")(module);
const AWS = require("aws-sdk");
const { Amplify } = require("aws-amplify");
const fs = require("fs");
const path = require("path");
const { createCityPrice } = require("../../src/graphql/mutations.ts");

const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "numbeoCityPricesActual.json"
);

Amplify.configure({
  aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
  aws_appsync_region: "eu-west-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-fakeApiId123456",
});

const docClient = new AWS.DynamoDB.DocumentClient({
  region: "eu-west-1",
  endpoint: "http://localhost:8000",
});

async function importData(cities) {
  for (const cityObj of cities) {
    const {
      name,
      city_id,
      usdPrices,
      currency,
      contributors12months,
      monthLastUpdate,
      contributors,
      yearLastUpdate,
      prices,
    } = cityObj;
    const input = {
      cityCountry: name,
      city: name.split(", ")[0],
      country: name.split(", ")[1],
      currency,
      contributors12months,
      monthLastUpdate,
      contributors,
      yearLastUpdate,
      prices,
      usdPrices,
      numbeoCityId: city_id,
    };

    const params = {
      TableName: "CityPrice",
      Item: input,
    };

    try {
      console.log(input);
      const result = await Amplify.API.graphql({
        query: createCityPrice,
        variables: { input },
      });
      console.log(result);
      throw Error("stop");
    } catch (error) {
      console.error(error);
      break;
    }
  }
}

fs.readFile(jsonFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading data from file:", err);
    return;
  }

  const items = JSON.parse(data);
  importData(items);
});
