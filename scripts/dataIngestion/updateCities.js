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

const updateTableParams = {
  TableName: "Cities",
  AttributeDefinitions: [{ AttributeName: "name", AttributeType: "S" }],
  GlobalSecondaryIndexUpdates: [
    {
      Create: {
        IndexName: "name-index",
        KeySchema: [{ AttributeName: "name", KeyType: "HASH" }],
        Projection: {
          ProjectionType: "ALL",
        },
        ProvisionedThroughput: {
          // same here, will need to be considered for launch, or move to pay as you go to get an idea first three months.
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5,
        },
      },
    },
  ],
};

dynamoDB.describeTable({ TableName: "Cities" }, (err, data) => {
  if (err) {
    if (err.code === "ResourceNotFoundException") {
      // Table does not exist
      console.error('table does not exist,', JSON.stringify(err, null, 2))
    } else {
      console.error("Unable to describe table:", JSON.stringify(err, null, 2));
    }
  } else {
    console.log("Table exists! updating....", JSON.stringify(data, null, 2));
    dynamoDB.updateTable(updateTableParams, (err, data) => {
      if (err) {
        console.error("Unable to update table:", JSON.stringify(err, null, 2));
      } else {
        console.error("Updated table:", JSON.stringify(data, null, 2));
      }
    });
  }
});
