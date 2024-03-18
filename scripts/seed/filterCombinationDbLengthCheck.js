const {
  getCostsForCity,
} = require("../dataIngestion/calculateMonthlyCostsForCity");
require("ts-node/register");
require("dotenv").config();
require = require("esm")(module);
const itemsPurchaseFrequency = require("../../data/core_data/itemsPurchaseFrequency.json");
const numbeoCityPricesActual = require("../../data/mocks/dbjson/numbeoCityPricesActual.json");
const { Amplify, graphqlOperation } = require("aws-amplify");
const { listFilterCombinations } = require("../../src/graphql/queries.ts");

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_ENDPOINT,
  aws_appsync_region: process.env.APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: process.env.APPSYNC_API_KEY,
});

async function countFilterCombinationListings() {
  let nextToken = null;
  let count = 0;
  do {
    try {
      const result = await Amplify.API.graphql({
        query: listFilterCombinations,
        variables: {
          nextToken,
        },
      });
      count += result.data.listFilterCombinations.items.length;
      nextToken = result.data.listFilterCombinations.nextToken;
    } catch (error) {
      console.error("Error fetching filter combinations: ", error);
    }
  } while (nextToken);
  console.log("total count of filter combinations listings", count);
}

countFilterCombinationListings();
