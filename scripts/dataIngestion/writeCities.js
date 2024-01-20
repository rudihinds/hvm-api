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

// create cities table, and add all cities' data from cities+5m.json

const createTableParams = {
  TableName: "Cities",
  KeySchema: [{ AttributeName: "city", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "city", AttributeType: "N" }],
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
  "newCities.json"
);

const insertCitiesData = () => {
  const citiesData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
  citiesData.forEach((cityObject, index) => {
    const putParams = {
      TableName: "Cities",
      Item: {
        city: `${cityObject.city}, ${cityObject.country}`,
        name: cityObject.name,
        country: cityObject.country,
        latitude: cityObject.latitude,
        longitude: cityObject.longitude,
      },
    };
    docClient.put(putParams, (err, data) => {
      if (err) {
        console.error("Unable to add city:", JSON.stringify(err, null, 2));
      } else {
        console.log("Added city:", JSON.stringify(data, null, 2));
      }
    });
  });
};

dynamoDB.describeTable({ TableName: "Cities" }, (err, data) => {
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
          insertCitiesData();
        }
      });
    } else {
      console.error("Unable to describe table:", JSON.stringify(err, null, 2));
    }
  } else {
    console.log("Table already exists:", JSON.stringify(data, null, 2));
    insertCitiesData();
  }
});
