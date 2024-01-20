/**
 * This code is responsible for importing data from a JSON file into a DynamoDB table
 * using AWS Amplify and GraphQL. It reads the data from the JSON file, processes each
 * city object, and creates or updates the corresponding city price item in the DynamoDB
 * table.
 */

// Import required modules
require = require("esm")(module);
const { Amplify } = require("aws-amplify");
const fs = require("fs");
const path = require("path");
const {
  createCityPrice,
  updateCityPrice,
} = require("../../src/graphql/mutations.ts");
const { getCityPrice } = require("../../src/graphql/queries.ts");

// Set the path to the JSON file
const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "numbeoCityPricesActual.json"
);

// Configure Amplify with the necessary AWS AppSync details
Amplify.configure({
  aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
  aws_appsync_region: "eu-west-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-fakeApiId123456",
});

/**
 * Retrieves a city price item from DynamoDB based on the provided cityCountry value.
 *
 * @param {string} cityCountry - The name of the city and country.
 * @returns {Promise<object>} A promise that resolves to the city price item from DynamoDB.
 * @throws {Error} If an error occurs while retrieving the city price item.
 */
async function getCityFromDynamoDB(cityCountry) {
  try {
    const result = await Amplify.API.graphql({
      query: getCityPrice,
      variables: { cityCountry },
    });
    return result.data.getCityPrice;
  } catch (error) {
    console.error(
      "Error in getting city from DynamoDB when checking if it exists.",
      error
    );
  }
}

// Initialize a counter variable
let count = 0;

/**
 * Imports the data from the JSON file into the DynamoDB table.
 *
 * @param {Array<object>} cities - An array of city objects to import.
 * @returns {Promise<void>} A promise that resolves when the data import is complete.
 */
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

    // Prepare the input object for creating or updating the city price item
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

    // Check if the city price item already exists in DynamoDB
    const city = await getCityFromDynamoDB(name);

    let queryType;

    try {
      // Determine the query type (create or update) based on the existence of the city price item
      const params = {
        query: city ? updateCityPrice : createCityPrice,
        variables: { input },
      };
      queryType = params.query;

      // Execute the GraphQL mutation to create or update the city price item
      const result = await Amplify.API.graphql(params);

      // Log the success message and update the counter
      console.log("Successfully added:", name);
      console.log(Object.entries(result.data)[0][0]);
      count += 1;
      console.log("Count:", count);
    } catch (error) {
      console.error("Error updating or creating city price item.", error);
      console.error("Query type:", queryType);
    }
  }
}

// Read the data from the JSON file
fs.readFile(jsonFilePath, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading data from file:", err);
    return;
  }

  // Parse the JSON data into an array of city objects
  const items = JSON.parse(data);
  console.log("Items length:", items.length);

  // Import the data into the DynamoDB table
  importData(items);
});
