const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { Amplify } = require("aws-amplify");
const { createCostOfLivingRanking } = require("../../src/graphql/mutations.ts");

const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "costOfLivingRankings.json"
);

Amplify.configure({
  aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
  aws_appsync_region: "eu-west-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-fakeApiId123456",
});

// const insertRankingsData = () => {
const rankingsData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
console.log(rankingsData.length);

rankingsData.forEach(async (rankingObject, index) => {
  const input = {
    ...rankingObject,
    city: rankingObject.city_name,
    cityCountry: `${rankingObject.city_name}, ${rankingObject.country}`,
  };

  try {
    const result = await Amplify.API.graphql({
      query: createCostOfLivingRanking,
      variables: { input },
    });
    console.log("Item added:", JSON.stringify(result.data, null, 2));
    console.log("added item number", items.indexOf(item));
  } catch (error) {
    console.error("Error putting item:", JSON.stringify(error, null, 2));
  }
});
