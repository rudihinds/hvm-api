const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { Amplify } = require("aws-amplify");
const { createCostOfLivingRanking } = require("../../src/graphql/mutations.ts");

// AWS.config.update({
//   region: "eu-west-1",
//   accessKeyId: "fakeaccess",
//   secretAccessKey: "fakesecret",
//   endpoint: "http://localhost:8000",
// });

// const dynamoDB = new AWS.DynamoDB();
// const docClient = new AWS.DynamoDB.DocumentClient();

// const createTableParams = {
//   TableName: "CostOfLivingRankings",
//   KeySchema: [{ AttributeName: "city", KeyType: "HASH" }],
//   AttributeDefinitions: [{ AttributeName: "city", AttributeType: "S" }],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 5,
//     WriteCapacityUnits: 5,
//   },
// };

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

  // docClient.put(putParams, (err, data) => {
  //   if (err) {
  //     console.error("Unable to add ranking:", JSON.stringify(err, null, 2));
  //   } else {
  //     console.log("Added ranking:", JSON.stringify(data, null, 2), rankingObject);
  //   }
  // });
});
// };

// dynamoDB.describeTable({ TableName: "CostOfLivingRankings" }, (err, data) => {
//   if (err) {
//     if (err.code === "ResourceNotFoundException") {
//       // Table does not exist, create it
//       dynamoDB.createTable(createTableParams, (err, data) => {
//         if (err) {
//           console.error(
//             "Unable to create table:",
//             JSON.stringify(err, null, 2)
//           );
//         } else {
//           console.log("Created table:", JSON.stringify(data, null, 2));
//           insertRankingsData();
//         }
//       });
//     } else {
//       console.error("Unable to describe table:", JSON.stringify(err, null, 2));
//     }
//   } else {
//     console.log("Table already exists:", JSON.stringify(data, null, 2));
//     insertRankingsData();
//   }
// });
