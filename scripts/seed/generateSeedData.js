/**
 * This JavaScript file is used to generate city prices and cost of living rankings 
 * seed data for a database. They are linked by citycountry so this is resolved here
 * It uses the faker library to generate fake data.
 */

// Import the faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import cityPrices, although it's not used in this file
const cityPrices = require("./cityPrices");

// Generate a random country, city, and cityCountry combination
let country = faker.location.country();
let city = faker.location.city();
let cityCountry = city + ", " + country;

// Function to create a random cost of living ranking
function createRandomCostOfLivingRanking() {
  return {
    __typename: "CostOfLivingRanking", // GraphQL typename
    cityCountry, // The city and country combination
    // Various financial metrics, generated randomly
    grossRentalYieldOutsideOfCentre: faker.finance.amount(),
    priceToRentRatioOutsideOfCentre: faker.finance.amount(),
    housePriceToIncomeRatio: faker.finance.amount(),
    affordabilityIndex: faker.finance.amount(),
    mortgageAsPercentageOfIncome: faker.finance.amount(),
    priceToRentRatioCityCentre: faker.finance.amount(),
    grossRentalYieldCityCentre: faker.finance.amount(),
  };
}

// Function to create a random city price
function createRandomCityPrice() {
  return {
    __typename: "CityPrice", // GraphQL typename
    cityCountry, // The city and country combination
    city, // The city
    country, // The country
    numbeoCityId: faker.number.int(), // A random integer for the city ID
    currency: faker.finance.currencyCode(), // A random currency code
    // An array of 3 random prices
    prices: faker.helpers.multiple(() => createRandomPrice(), { count: 3 }),
    // An array of 3 random USD prices
    usdPrices: faker.helpers.multiple(() => createRandomPrice("UsdPrice"), {
      count: 3,
    }),
    contributors12months: faker.number.int(), // A random number of contributors in the last 12 months
    monthLastUpdate: faker.number.int({ min: 1, max: 12 }), // A random month for the last update
    contributors: faker.number.int(), // A random number of contributors
    yearLastUpdate: faker.number.int({ min: 2000, max: 2022 }), // A random year for the last update
    // An array of 3 random image objects
    images: faker.helpers.multiple(createRandomImageObject, { count: 3 }),
  };
}

// An object of random URLs
const randomUrls = {
  __typename: "Urls", // GraphQL typename
  // Various types of URLs, all generated randomly
  raw: faker.image.url(),
  full: faker.image.url(),
  regular: faker.image.url(),
  small: faker.image.url(),
  thumb: faker.image.url(),
  smallS3: faker.image.url(),
};

// Function to create a random image object
const createRandomImageObject = () => {
  return {
    __typename: "ImageObject", // GraphQL typename
    unsplashId: faker.string.uuid(), // A random UUID for the image ID
    description: faker.lorem.sentence(), // A random sentence for the description
    urls: randomUrls, // The random URLs object
    height: faker.number.int(), // A random integer for the height
    width: faker.number.int(), // A random integer for the width
    unsplashLikes: faker.number.int(), // A random number of likes
  };
};

// Function to create a random price
const createRandomPrice = (priceTypename = "") => {
  return {
    __typename: priceTypename || "Price", // GraphQL typename, defaulting to "Price"
    // Various price metrics, all set to 10
    lowestPrice: 10,
    averagePrice: 10,
    highestPrice: 10,
    dataPoints: 10,
    itemName: "sdw", // The item name, set to "sdw"
    itemId: 10, // The item ID, set to 10
  };
};

// Function to generate the seed data
const generateSeedData = () => {
  return {
    createRandomCityPrice: createRandomCityPrice(), // A random city price
    createRandomCostOfLivingRanking: createRandomCostOfLivingRanking(), // A random cost of living ranking
  };
};

// Export the generateSeedData function
module.exports = generateSeedData;