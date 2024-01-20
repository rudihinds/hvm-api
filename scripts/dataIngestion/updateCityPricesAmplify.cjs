/**
 * This script is responsible for fetching images from Unsplash for a list of cities,
 * updating the city data in the database with the image URLs, and logging the success
 * and failure counts at the end of the script.
 */

// Import required modules
require = require("esm")(module);
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { updateCityPrice } = require("../../hvm-api/src/graphql/mutations.ts");
const { getCityPrice } = require("../../hvm-api/src/graphql/queries.ts");
const { API, graphqlOperation } = require("aws-amplify");
const { log } = require("console");
const { Amplify } = require("aws-amplify");

const appsyncEndpoint = process.env.APPSYNC_ENDPOINT;
const appsyncRegion = process.env.APPSYNC_REGION;
const appsyncAuthType = process.env.APPSYNC_AUTH_TYPE;
const appsyncApiKey = process.env.APPSYNC_API_KEY;
require("dotenv").config();

// Get the Unsplash client ID from environment variables
const unsplashClientId = process.env.UNSPLASH_CLIENT_ID;

// Define the path to the JSON file containing the list of cities
const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "citiesFromDbWithNoImages.json"
);

// Read the JSON file and parse the contents into an array of cities
const cities = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

// Initialize counters for success and failure counts
let successCount = 0;
let failureCount = 0;

// Initialize the index of the current city being processed
let currentCityIndex = 0;

/**
 * Fetches images from Unsplash for a given city.
 *
 * @param {string} city - The name of the city.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of city images.
 */
const getCityImages = async (city) => {
  try {
    // Send a GET request to the Unsplash API to search for photos of the city
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashClientId}&query=${city}`,
      { headers: { "Content-Type": "application/json" } }
    );

    // Extract the relevant information from the API response and create an array of city images
    const cityImages = res.data?.results?.slice(0, 10).map((image) => {
      let cityImage = {
        unsplashId: image?.id,
        description: image?.description,
        urls: image?.urls,
        height: image?.height,
        width: image?.width,
        unsplashLikes: image?.likes,
      };
      return cityImage;
    });

    return cityImages;
  } catch (error) {
    // Log an error message if fetching images for the city fails
    console.error(
      `Failed to get images for ${city} at index ${currentCityIndex}`,
      error
    );
    failureCount++;
    return null;
  }
};

// Configure the Amplify library with the necessary settings
Amplify.configure({
  aws_appsync_graphqlEndpoint: appsyncEndpoint,
  aws_appsync_region: appsyncRegion,
  aws_appsync_authenticationType: appsyncAuthType,
  aws_appsync_apiKey: appsyncApiKey,
});

/**
 * Retrieves the city data from DynamoDB for a given city and country.
 *
 * @param {string} cityCountry - The name of the city and country.
 * @returns {Promise<Object|null>} A promise that resolves to the city data or null if an error occurs.
 */
const getCityFromDynamoDB = async (cityCountry) => {
  try {
    // Execute the GraphQL query to get the city data from DynamoDB
    const result = await Amplify.API.graphql({
      query: getCityPrice,
      variables: { cityCountry },
    });

    return result.data.getCityPrice;
  } catch (error) {
    // Log an error message if retrieving the city data fails
    console.error("Error in getting JSON city from DynamoDB", error);
    return null;
  }
};

/**
 * Delays the execution for a specified interval.
 *
 * @param {number} interval - The interval in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified interval.
 */
const delay = (interval) =>
  new Promise((resolve) => setTimeout(resolve, interval));

// Define the maximum number of requests per interval and the interval duration
const MAX_REQUESTS = 50;
const INTERVAL = 61 * 60 * 1000; // 61 minutes in milliseconds

// Initialize the counter for the number of requests made
let requestCount = 0;

// The rest of the code...

/**
 * Asynchronously updates the city images for each city in the 'cities' array.
 * This function iterates through the 'cities' array and performs the following actions for each city:
 * - Checks if the maximum number of requests has been reached. If so, waits for the specified interval before continuing.
 * - Retrieves the city from DynamoDB based on the city name and country.
 * - If the city exists in DynamoDB and already has images, skips the Unsplash query and continues to the next city.
 * - Retrieves the city images from Unsplash.
 * - Updates the city record in DynamoDB with the image URLs.
 * - Prints the result of the update operation and increments the success count.
 * - If any errors occur during the update operation, prints an error message and increments the failure count.
 * - Prints the current success count and failure count after processing each city.
 *
 * @returns {Promise<void>} A promise that resolves when all cities have been processed.
 */
const updateCityImages = async () => {
  for (const city of cities) {
    currentCityIndex++;
    if (requestCount >= MAX_REQUESTS) {
      console.log(
        `Reached limit of ${MAX_REQUESTS} requests. Waiting for ${
          INTERVAL / 60 / 1000
        } minutes.`
      );
      console.log(
        `current time: ${new Date().toLocaleTimeString()}, current city: ${
          city.city
        }`
      );
      await delay(INTERVAL);
      requestCount = 0;
    }

    const cityCountry = city.city + ", " + city.country;
    const cityFromDynamoDB = await getCityFromDynamoDB(cityCountry);

    if (cityFromDynamoDB) {
      if (cityFromDynamoDB && cityFromDynamoDB.images !== null) {
        console.log(
          `Images already exist for ${city.city}, skipping Unsplash query.`
        );
        continue;
      }

      const cityImages = await getCityImages(city.city);
      requestCount++;

      if (cityImages) {
        const input = {
          cityCountry,
          ...cityFromDynamoDB,
          images: cityImages,
        };

        console.log("input", input);

        try {
          const result = await Amplify.API.graphql({
            query: updateCityPrice,
            variables: {
              input,
            },
          });
          console.log(result.data.updateCityPrice);
          successCount++;
        } catch (error) {
          console.error(
            `Error updating images for city: ${city.city} at index ${currentCityIndex}`,
            error
          );
          failureCount++;
        }
      } else {
        console.log(
          `Failed to get images for ${city.city} at index ${currentCityIndex}. Incrementing failure count and continuing.`
        );
        failureCount++;
      }
    }
    console.log(
      `Success Count: ${successCount}, Failure Count: ${failureCount}`
    );
  }
};

// Start updating city images
updateCityImages();
