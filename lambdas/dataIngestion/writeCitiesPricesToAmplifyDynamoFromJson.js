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

async function importData(items) {
  for (const item of items) {
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
    } = item;
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

    try {
      const result = await Amplify.API.graphql({
        query: createCityPrice,
        variables: { input },
      });
      console.log("Item added:", JSON.stringify(result.data, null, 2));
      console.log("added item number", items.indexOf(item));
      throw Error("stop");
    } catch (error) {
      console.error("Error putting item:", JSON.stringify(error, null, 2));
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
