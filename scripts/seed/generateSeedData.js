/**
 * This JavaScript file is used to generate city prices and cost of living rankings 
 * seed data for a database. They are linked by citycountry so this is resolved here
 * It uses the faker library to generate fake data.
 */

// Import the faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Function to create a random cost of living ranking
function createRandomCostOfLivingRanking(cityCountry) {
  return {
    cityCountry, // The city and country combination
    grossRentalYieldOutsideOfCentre: faker.number.float(),
    priceToRentRatioOutsideOfCentre: faker.number.float(),
    housePriceToIncomeRatio: faker.number.float(),
    affordabilityIndex: faker.number.float(),
    mortgageAsPercentageOfIncome: faker.number.float(),
    priceToRentRatioCityCentre: faker.number.float(),
    grossRentalYieldCityCentre: faker.number.float(),
  };
}

// Function to create a random city price
function createRandomCityPrice(cityCountry) {
    const city = cityCountry.split(", ")[0];
    const country = cityCountry.split(", ")[1];
  return {
    cityCountry, // The city and country combination
    city, // The city
    country, // The country
    numbeoCityId: faker.number.int(1000), // A random integer for the city ID
    currency: faker.finance.currencyCode(), // A random currency code
    prices: faker.helpers.multiple(() => createRandomPrice(), { count: 3 }),
    usdPrices: faker.helpers.multiple(() => createRandomPrice(), {
      count: 3,
    }),
    contributors12Months: faker.number.int(1000), // A random number of contributors in the last 12 months
    monthLastUpdate: faker.number.int({ min: 1, max: 12 }), // A random month for the last update
    contributors: faker.number.int(1000), // A random number of contributors
    yearLastUpdate: faker.number.int({ min: 2000, max: 2022 }), // A random year for the last update
    // An array of 3 random image objects
    images: faker.helpers.multiple(createRandomImageObject, { count: 3 }),
  };
}

// An object of random URLs
const randomUrls = {
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
    unsplashId: faker.string.uuid(), // A random UUID for the image ID
    description: faker.lorem.sentence(), // A random sentence for the description
    urls: randomUrls, // The random URLs object
    height: faker.number.int(1000), // A random integer for the height
    width: faker.number.int(1000), // A random integer for the width
    unsplashLikes: faker.number.int(1000), // A random number of likes
  };
};

// Function to create a random price
const createRandomPrice = () => {
  return {
    // Various price metrics, all set to 10
    lowestPrice: faker.number.int(1000),
    averagePrice: faker.number.int(1000),
    highestPrice: faker.number.int(1000),
    dataPoints: faker.number.int(1000), 
    itemName: faker.commerce.productName(), // A random item name
    itemId: faker.number.int(1000), // A random item ID
  };
};

// Function to generate the seed data
const generateSeedData = () => {
  // Generate a random country, city, and cityCountry combination
  let country = faker.location.country();
  let city = faker.location.city();
  let cityCountry = city + ", " + country;
  return {
    createRandomCityPrice: createRandomCityPrice(cityCountry), // A random city price
    createRandomCostOfLivingRanking:
      createRandomCostOfLivingRanking(cityCountry), // A random cost of living ranking
  };
};

// Export the generateSeedData function
module.exports = generateSeedData;