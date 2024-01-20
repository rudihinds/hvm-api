const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

AWS.config.update({
  region: "eu-west-1",
  accessKeyId: "fakeaccess",
  secretAccessKey: "fakesecret",
  endpoint: "http://localhost:8000",
});

const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient();

const createCityImagesTableParams = {
  TableName: "CityImages",
  KeySchema: [
    { AttributeName: "city", KeyType: "HASH" },
    { AttributeName: "imageId", KeyType: "RANGE" },
  ],
  AttributeDefinitions: [
    { AttributeName: "city", AttributeType: "S" },
    { AttributeName: "imageId", AttributeType: "S" },
  ],
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
  "sampleCityWithImages.json"
);

// get cityId from the cities table for each city in the image object from samplcitywithimages json

const getCityIdfromCities = async (cityName) => {
  const queryParams = {
    TableName: "Cities",
    IndexName: "name-index",
    KeyConditionExpression: "#cityName = :cityName",
    ExpressionAttributeNames: {
      "#cityName": "name",
    },
    ExpressionAttributeValues: {
      ":cityName": cityName,
    },
  };
  try {
    const data = await docClient.query(queryParams).promise();
    return data.Items.length > 0 ? data.Items[0].cityId : null;
  } catch (err) {
    console.error("Error querying cityId:", JSON.stringify(err, null, 2));
    return null;
  }
};

const insertCityImagesData = () => {
  const cityImagesData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

  cityImagesData.forEach(async (cityObject) => {
    const cityId = await getCityIdfromCities(cityObject.city);
    if (cityId === null) {
      console.error(`City not found: ${cityObject.city}`);
    } else {
      cityObject.images.forEach((imageObject) => {
        const putParams = {
          TableName: "CityImages",
          Item: {
            cityId,
            city: cityObject.city,
            imageId: uuidv4(),
            unsplashId: imageObject.unsplashId,
            name: imageObject.name,
            description: imageObject.description,
            alt_description: imageObject.alt_description,
            urls: imageObject.urls,
          },
        };

        docClient.put(putParams, (err, data) => {
          if (err) {
            console.error(
              "Unable to add city image:",
              JSON.stringify(err, null, 2)
            );
          } else {
            console.log("Added city image:", JSON.stringify(data, null, 2));
          }
        });
      });
    }
  });
};

dynamoDB.describeTable({ TableName: "CityImages" }, (err, data) => {
  if (err) {
    if (err.code === "ResourceNotFoundException") {
      // Table does not exist, create it
      dynamoDB.createTable(createCityImagesTableParams, (err, data) => {
        if (err) {
          console.error(
            "Unable to create table:",
            JSON.stringify(err, null, 2)
          );
        } else {
          console.log("Created table:", JSON.stringify(data, null, 2));
          insertCityImagesData();
        }
      });
    } else {
      console.error("Unable to describe table:", JSON.stringify(err, null, 2));
    }
  } else {
    console.log("Table already exists:", JSON.stringify(data, null, 2));
    insertCityImagesData();
  }
});
