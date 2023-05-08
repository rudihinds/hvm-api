require = require("esm")(module);
const { Amplify } = require("aws-amplify");
const fs = require("fs");
const path = require("path");
const {
  createCityPrice,
  updateCityPrice,
} = require("../../src/graphql/mutations.ts");

const { getCityPrice } = require("../../src/graphql/queries.ts");

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

async function getCityFromDynamoDB(cityCountry) {
  try {
    const result = await Amplify.API.graphql({
      query: getCityPrice,
      variables: { cityCountry },
    });
    return result.data.getCityPrice;
  } catch (error) {
    console.error(
      "error in getting json city from dynamodb when checking if it exists getcityfromdynamodb",
      error
    );
  }
}

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

    const city = await getCityFromDynamoDB(name);

    let queryType;

    try {
      const params = {
        query: city ? updateCityPrice : createCityPrice,
        variables: { input },
      };
      queryType = params.query;
      const result = await Amplify.API.graphql(params);
      console.log(name);
      console.log(Object.entries(result.data)[0][0]);
    } catch (error) {
      console.error("error updating or creating cityprice item", error);
      console.error("querytype", queryType);
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
