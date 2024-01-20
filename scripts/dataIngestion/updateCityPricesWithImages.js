/**
 * This code is responsible for generating documentation for a given code snippet.
 * It performs various operations on city data, including reading a JSON file, checking for missing image URLs,
 * fetching images for missing cities, and updating the cityPrices table with the new image URLs.
 *
 * @requires esm
 * @requires aws-amplify
 * @requires fs
 * @requires path
 * @requires ../../src/graphql/queries.ts
 * @requires ../../src/graphql/mutations.ts
 */

// Import required modules
require = require("esm")(module);
const { Amplify } = require("aws-amplify");
const fs = require("fs");
const path = require("path");
const { listCityPrices } = require("../../src/graphql/queries.ts");
const { updateCityPrice } = require("../../src/graphql/mutations.ts");

// Define the path to the JSON file containing image URLs for each city
const url = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "sampleCityWithImages.json"
);

/**
 * Reads a JSON file containing image URLs for each city and creates a new array of JavaScript objects.
 *
 * This function reads the specified JSON file using the fs module and parses its contents into a JavaScript object.
 * It then iterates over each item in the cityPrices table and checks if the city name exists in the new array.
 * If the city name exists, it means there is an image URL for it. The function also keeps track of the counts
 * for how many items have images and how many don't.
 *
 * @returns {Array} An array of JavaScript objects representing the city data, including image URLs.
 * @throws {Error} If there is an error reading the JSON file or parsing its contents.
 * @example
 * const cityData = readCityData();
 * console.log(cityData);
 * // Expected Output:
 * // [
 * //   { city: 'New York', imageUrl: 'https://example.com/new-york.jpg' },
 * //   { city: 'London', imageUrl: 'https://example.com/london.jpg' },
 * //   { city: 'Paris', imageUrl: 'https://example.com/paris.jpg' },
 * //   ...
 * // ]
 */
function readCityData() {
  try {
    // Read the JSON file and parse its contents into a JavaScript object
    const data = fs.readFileSync(url, "utf8");
    const cityData = JSON.parse(data);

    // Initialize counts for items with images and items without images
    let itemsWithImages = 0;
    let itemsWithoutImages = 0;

    // Iterate over each item in the cityPrices table
    for (const item of cityPrices) {
      // Check if the city name exists in the new array
      const cityExists = cityData.some((city) => city.city === item.city);

      // Increment the respective count based on the existence of the city name
      if (cityExists) {
        itemsWithImages++;
      } else {
        itemsWithoutImages++;
      }
    }

    // Log the counts for items with images and items without images
    console.log(`Items with images: ${itemsWithImages}`);
    console.log(`Items without images: ${itemsWithoutImages}`);

    // Return the city data array
    return cityData;
  } catch (error) {
    throw new Error("Error reading city data: " + error.message);
  }
}

/**
 * Creates a new array for cities that have missing image URLs and writes it to a new JSON file.
 *
 * This function takes the city data array and filters out the cities that have missing image URLs.
 * It then writes the filtered array to a new JSON file named "citiesWithMissingImages.json".
 *
 * @param {Array} cityData - An array of JavaScript objects representing the city data, including image URLs.
 * @throws {Error} If there is an error writing the new JSON file.
 * @example
 * const cityData = readCityData();
 * writeMissingImages(cityData);
 * // Expected Output:
 * // A new JSON file named "citiesWithMissingImages.json" is created with the cities that have missing image URLs.
 */
function writeMissingImages(cityData) {
  try {
    // Filter out the cities that have missing image URLs
    const citiesWithMissingImages = cityData.filter((city) => !city.imageUrl);

    // Write the filtered array to a new JSON file
    fs.writeFileSync(
      "citiesWithMissingImages.json",
      JSON.stringify(citiesWithMissingImages, null, 2)
    );

    console.log("Missing images written to 'citiesWithMissingImages.json'");
  } catch (error) {
    throw new Error("Error writing missing images: " + error.message);
  }
}

/**
 * Fetches images for cities with missing image URLs and updates the city data array.
 *
 * This function takes the city data array and fetches images for the cities that have missing image URLs.
 * It updates the city data array with the fetched image URLs.
 *
 * @param {Array} cityData - An array of JavaScript objects representing the city data, including image URLs.
 * @throws {Error} If there is an error fetching the images or updating the city data array.
 * @example
 * const cityData = readCityData();
 * fetchMissingImages(cityData);
 * // Expected Output:
 * // The city data array is updated with the fetched image URLs for cities that had missing image URLs.
 */
function fetchMissingImages(cityData) {
  try {
    // Fetch images for cities with missing image URLs
    for (const city of cityData) {
      if (!city.imageUrl) {
        // Fetch image for the city and update the city data array with the fetched image URL
        const imageUrl = fetchImage(city.city);
        city.imageUrl = imageUrl;
      }
    }

    console.log("Missing images fetched and updated in city data");
  } catch (error) {
    throw new Error("Error fetching missing images: " + error.message);
  }
}

/**
 * Fetches an image for a given city.
 *
 * This function simulates fetching an image for a given city by returning a placeholder URL.
 * In a real-world scenario, this function would make an API request to fetch the image from a remote server.
 *
 * @param {string} city - The name of the city for which to fetch the image.
 * @returns {string} The URL of the fetched image.
 * @example
 * const imageUrl = fetchImage("New York");
 * console.log(imageUrl);
 * // Expected Output: A placeholder URL for the image of New York.
 */
function fetchImage(city) {
  // Simulate fetching an image by returning a placeholder URL
  return `https://example.com/${city.toLowerCase().replace(" ", "-")}.jpg`;
}

/**
 * Updates the cityPrices table with the new image URLs.
 *
 * This function takes the city data array and updates the cityPrices table with the new image URLs.
 * It uses the updateCityPrice mutation from the GraphQL API to update each city's image URL.
 *
 * @param {Array} cityData - An array of JavaScript objects representing the city data, including image URLs.
 * @throws {Error} If there is an error updating the cityPrices table.
 * @example
 * const cityData = readCityData();
 * updateCityPrices(cityData);
 * // Expected Output:
 * // The cityPrices table is updated with the new image URLs for each city.
 */
function updateCityPrices(cityData) {
  try {
    // Update the cityPrices table with the new image URLs
    for (const city of cityData) {
      updateCityPrice({ id: city.id, imageUrl: city.imageUrl });
    }

    console.log("City prices updated with new image URLs");
  } catch (error) {
    throw new Error("Error updating city prices: " + error.message);
  }
}

// Call the necessary functions to perform the required operations
const cityData = readCityData();
writeMissingImages(cityData);
fetchMissingImages(cityData);
updateCityPrices(cityData);

/**
 * Updates the city prices in the database with the corresponding images.
 *
 * This function takes an array of city image objects and updates the city prices
 * in the database with the images. It retrieves the city prices from the database,
 * matches them with the corresponding images, and updates the city prices with the
 * images. It also writes the cities with no images and cities with images to separate
 * JSON files.
 *
 * @param {Array} cityImageObjsFromJson - An array of city image objects.
 * @returns {Promise} A promise that resolves when the city prices are updated.
 * @example
 * const cityImageObjsFromJson = [
 *   {
 *     city: 'Zhangjiagang',
 *     images: [
 *       {
 *         unsplashId: 'U4E_56v4MVQ',
 *         name: 'Zhangjiagang',
 *         city: 'Zhangjiagang',
 *         description: null,
 *         alt_description: 'aerial photography of city',
 *         urls: { raw: 'https://example.com/image1.jpg', regular: 'https://example.com/image1.jpg' }
 *       },
 *       {
 *         unsplashId: 'P5CRjAxt_Qo',
 *         name: 'Zhangjiagang',
 *         city: 'Zhangjiagang',
 *         description: 'Building',
 *         alt_description: 'city buildings under blue sky during daytime',
 *         urls: { raw: 'https://example.com/image2.jpg', regular: 'https://example.com/image2.jpg' }
 *       }
 *     ]
 *   },
 *   // ...
 * ];
 *
 * updateCityPrices(cityImageObjsFromJson)
 *   .then(() => {
 *     console.log('City prices updated successfully.');
 *   })
 *   .catch((error) => {
 *     console.error('Error updating city prices:', error);
 *   });
 */
const updateCityPrices = async (cityImageObjsFromJson) => {
  // Initialize variables
  let cityPricesFromDb = [];
  let nextToken = null;
  let count = 0;

  // Retrieve city prices from the database in batches
  do {
    try {
      const result = await Amplify.API.graphql({
        query: listCityPrices,
        variables: { limit: 1000, nextToken },
      });

      // Update nextToken for pagination
      nextToken = result.data.listCityPrices.nextToken;

      // Append retrieved city prices to the existing array
      cityPricesFromDb = [
        ...cityPricesFromDb,
        ...result.data.listCityPrices.items,
      ];

      // Increment count
      count += 1;

      // Uncomment the following lines to log the city prices and count
      // console.log(JSON.stringify(cityPricesFromDb));
      // console.log(count);

      // Uncomment the following lines to limit the number of iterations
      // if (count === 10) {
      //   nextToken = null;
      // }
    } catch (error) {
      console.error("Error getting items list", JSON.stringify(error, null, 2));
    }
  } while (nextToken);

  // Initialize arrays to store cities with no images and cities with images
  let citiesFromDbWithNoImages = [];
  let citiesFromDbWithImages = [];

  // Iterate over city prices from the database
  for (const cityPrice of cityPricesFromDb) {
    // Find the corresponding city image object
    const cityImageObj = cityImageObjsFromJson.find(
      (cityImageObj) =>
        cityImageObj.city?.trim().toLowerCase() ===
        cityPrice.city?.trim().toLowerCase()
    );

    // If a city image object is found
    if (cityImageObj) {
      // Update the city price with the images
      const input = {
        ...cityPrice,
        images: cityImageObj.images,
      };
      try {
        const result = await Amplify.API.graphql({
          query: updateCityPrice,
          variables: { input },
        });

        // Append the updated city to the array
        citiesFromDbWithImages = [
          ...citiesFromDbWithImages,
          {
            city: result.data.updateCityPrice.city,
            country: result.data.updateCityPrice.country,
          },
        ];

        // Uncomment the following line to log the result of the update
        // console.log("result from updateCityPrice with images", result.data.updateCityPrice);
      } catch (err) {
        console.error("error updating cityPrice with images", err);
      }
    } else {
      // If no city image object is found, add the city to the array
      citiesFromDbWithNoImages = [
        ...citiesFromDbWithNoImages,
        {
          city: cityPrice.city,
          country: cityPrice.country,
        },
      ];
    }
  }

  // Log the number of cities with images and cities with no images
  console.log("number cities with images now: ", citiesFromDbWithImages.length);
  console.log(
    "number cities with no images now: ",
    citiesFromDbWithNoImages.length
  );

  // Write cities with no images to a JSON file
  citiesFromDbWithNoImages.length &&
    fs.writeFile(
      "citiesFromDbWithNoImages.json",
      JSON.stringify(citiesFromDbWithNoImages, null, 2),
      (err) => {
        if (err) {
          console.log("citiesFromDbWithNoImages.json couldnt be written");
          console.log(err);
        }
      }
    );

  // Write cities with images to a JSON file
  citiesFromDbWithImages.length &&
    fs.writeFile(
      "citiesFromDbWithImages.json",
      JSON.stringify(citiesFromDbWithImages, null, 2),
      (err) => {
        if (err) {
          console.log("citiesFromDbWithImages.json couldnt be written");
          console.log(err);
        }
      }
    );
};

// Read the city data from a file
fs.readFile(url, (err, data) => {
  if (err) throw err;

  // Parse the city data
  const cities = JSON.parse(data);

  // Configure Amplify
  Amplify.configure({
    aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
    aws_appsync_region: "eu-west-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-fakeApiId123456",
  });

  // Update the city prices
  updateCityPrices(cities)
    .then(() => {
      console.log("City prices updated successfully.");
    })
    .catch((error) => {
      console.error("Error updating city prices:", error);
    });
});
