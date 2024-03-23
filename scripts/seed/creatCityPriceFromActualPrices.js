const { Amplify } = require("aws-amplify");
require("ts-node/register");
require("dotenv").config();
require = require("esm")(module);
const { createCityPrice } = require("../../src/graphql/mutations.ts");
const { getCityPrice } = require("../../src/graphql/queries.ts");
const numbeoCityPricesActual = require("../../data/mocks/dbjson/numbeoCityPricesActual.json");
const { getCitiesThatHaveAllPricingData } = require("../utils/utils");

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_ENDPOINT,
  aws_appsync_region: process.env.APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: process.env.APPSYNC_API_KEY,
});

const cityData = getCitiesThatHaveAllPricingData(numbeoCityPricesActual);

async function processCityPriceChunk(chunk) {
  const promises = chunk.map(async (cityPrice) => {
    try {
      const existingCityPrice = await Amplify.API.graphql({
        query: getCityPrice,
        variables: {
          cityCountry: cityPrice.name,
        },
      });

      if (!existingCityPrice.data.getCityPrice) {
        let prices = cityPrice.prices.map((priceobj) => {
          return {
            itemId: priceobj.item_id,
            itemName: priceobj.item_name,
            lowestPrice: priceobj.lowest_price,
            averagePrice: priceobj.average_price,
            highestPrice: priceobj.highest_price,
            dataPoints: priceobj.data_points,
          };
        });
        let usdPrices = cityPrice.usdPrices.map((priceobj) => {
          return {
            itemId: priceobj.item_id,
            itemName: priceobj.item_name,
            lowestPrice: priceobj.lowest_price,
            averagePrice: priceobj.average_price,
            highestPrice: priceobj.highest_price,
            dataPoints: priceobj.data_points,
          };
        });
        const input = {
          cityCountry: cityPrice.name,
          city: cityPrice.name.split(",")[0].trim(),
          country: cityPrice.name.split(",")[1].trim(),
          prices: prices,
          usdPrices: usdPrices,
          currency: cityPrice.currency,
          contributors12Months: cityPrice.contributors12months,
          monthLastUpdate: cityPrice.monthLastUpdate,
          contributors: cityPrice.contributors,
          yearLastUpdate: cityPrice.yearLastUpdate,
          numbeoCityId: cityPrice.city_id,
        };
        const newCityPrice = await Amplify.API.graphql({
          query: createCityPrice,
          variables: {
            input,
          },
        });
        return newCityPrice;
      } else {
        console.log(
          "CityPrice already exists for cityCountry:",
          cityPrice.name,
        );
      }
    } catch (e) {
      console.error(`error creating item`, e);
    }
  });
  await Promise.allSettled(promises);
}

async function processAllCityPriceChunks(items, chunkSize) {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    await processCityPriceChunk(chunk);
  }
}

processAllCityPriceChunks(cityData, 100);
