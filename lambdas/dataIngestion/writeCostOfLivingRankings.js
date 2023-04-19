const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

AWS.config.update({
  region: "eu-west-1",
  accessKeyId: "fakeaccess",
  secretAccessKey: "fakesecret",
  endpoint: "http://localhost:8000",
});

const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const createTableParams = {
  TableName: "CostOfLivingRankings",
  KeySchema: [{ AttributeName: "city", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "city", AttributeType: "S" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
};

const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "costOfLivingRankings.json"
);

const insertRankingsData = () => {
  const rankingsData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
  console.log(rankingsData.length)

  rankingsData.forEach((rankingObject, index) => {
    const putParams = {
      TableName: "CostOfLivingRankings",
      Item: {
        ...rankingObject,
        city: rankingObject.city_name,
        cityCountry: `${rankingObject.city_name}, ${rankingObject.country}`,
      },
    };
    docClient.put(putParams, (err, data) => {
      if (err) {
        console.error("Unable to add ranking:", JSON.stringify(err, null, 2));
      } else {
        console.log("Added ranking:", JSON.stringify(data, null, 2));
      }
    });
  });
};

dynamoDB.describeTable({ TableName: "CostOfLivingRankings" }, (err, data) => {
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
          insertRankingsData();
        }
      });
    } else {
      console.error("Unable to describe table:", JSON.stringify(err, null, 2));
    }
  } else {
    console.log("Table already exists:", JSON.stringify(data, null, 2));
    insertRankingsData();
  }
});
