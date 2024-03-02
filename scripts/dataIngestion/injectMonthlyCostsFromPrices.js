// import puchase frequency by social class json
// get all cities that have prices (test with a few cities first)
// for each city, calculate the monthly cost of living for each social class by multiplying the relative purchase frequency by the price
// build each family type total and insert into the FilterCombination table
require("ts-node/register");
require("dotenv").config();
require = require("esm")(module);
const itemsPurchaseFrequency = require("../../data/core_data/itemsPurchaseFrequency.json");
const { Amplify, API, graphqlOperation } = require("aws-amplify");
const {
  listCityPrices,
  getCityPrice,
} = require("../../src/graphql/queries.ts");

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_ENDPOINT,
  aws_appsync_region: process.env.APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: process.env.APPSYNC_API_KEY,
});

const getCityPrices = async () => {
  const citiesWithPrices = [];
  try {
    const cities = await API.graphql(
      graphqlOperation(listCityPrices, { limit: 100 }),
    );
    for (const city of cities.data.listCityPrices.items) {
      try {
        const fullCityPrice = await API.graphql(
          graphqlOperation(getCityPrice, { cityCountry: city.cityCountry }),
        );
        citiesWithPrices.push({
          cityCountry: city.cityCountry,
          prices: fullCityPrice.data.getCityPrice.prices,
        });
      } catch (error) {
        console.error(
          `Failed to get prices for city ${city.cityCountry}: ${error}`,
        );
      }
    }
  } catch (error) {
    console.error(`Failed to list cities: ${error}`);
  }
  return citiesWithPrices;
};

getCityPrices().then((citiesWithPrices) => {
  citiesWithPrices.forEach((city) => {
    for (const priceObj of city.prices) {
      if (
        Object.keys(itemsPurchaseFrequency) &&
        !Object.keys(itemsPurchaseFrequency).includes(priceObj.item_name)
      ) {
        console.log("yolo");
      }
    }
  });
});

// console.log(Object.keys(itemsPurchaseFrequency));
