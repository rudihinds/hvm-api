const {
  getCostsForCity,
} = require("../dataIngestion/calculateMonthlyCostsForCity");
require("ts-node/register");
require("dotenv").config();
require = require("esm")(module);
const itemsPurchaseFrequency = require("../../data/core_data/itemsPurchaseFrequency.json");
const numbeoCityPricesActual = require("../../data/mocks/dbjson/numbeoCityPricesActual.json");
const { Amplify } = require("aws-amplify");
const { createFilterCombination } = require("../../src/graphql/mutations.ts");
const { getFilterCombination } = require("../../src/graphql/queries.ts");

Amplify.configure({
  aws_appsync_graphqlEndpoint: process.env.APPSYNC_ENDPOINT,
  aws_appsync_region: process.env.APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: process.env.APPSYNC_API_KEY,
});

const getCitiesThatHaveAllPricingData = (cityData, length) =>
  cityData.filter((city) => city.prices.length > length);

const citiesWithAllPricingData = getCitiesThatHaveAllPricingData(
  numbeoCityPricesActual,
  52,
);

const cityPrices = citiesWithAllPricingData.map((city) => {
  return getCostsForCity(city, itemsPurchaseFrequency);
});

async function processChunk(chunk) {
  const promises = chunk.map(async (cityCostOfLivingTotals) => {
    try {
      // Check if a FilterCombination with the same cityCountry already exists
      const existingFilterCombination = await Amplify.API.graphql({
        query: getFilterCombination,
        variables: {
          cityCountry: cityCostOfLivingTotals.cityCountry,
        },
      });

      // Only create a new FilterCombination if one does not already exist
      if (!existingFilterCombination.data.getFilterCombination) {
        const input = {
          cityCountry: cityCostOfLivingTotals.cityCountry,
          singleWorkingMonthlyCost:
            cityCostOfLivingTotals.workingClassFreq.single.monthlyCosts,
          singleMiddleMonthlyCost:
            cityCostOfLivingTotals.middleClassFreq.single.monthlyCosts,
          singleHighValueMonthlyCost:
            cityCostOfLivingTotals.highValueFreq.single.monthlyCosts,
          coupleWorkingMonthlyCost:
            cityCostOfLivingTotals.workingClassFreq.couple.monthlyCosts,
          coupleMiddleMonthlyCost:
            cityCostOfLivingTotals.middleClassFreq.couple.monthlyCosts,
          coupleHighValueMonthlyCost:
            cityCostOfLivingTotals.highValueFreq.couple.monthlyCosts,
          smallFamilyWorkingMonthlyCost:
            cityCostOfLivingTotals.workingClassFreq.smallFamily.monthlyCosts,
          smallFamilyMiddleMonthlyCost:
            cityCostOfLivingTotals.middleClassFreq.smallFamily.monthlyCosts,
          smallFamilyHighValueMonthlyCost:
            cityCostOfLivingTotals.highValueFreq.smallFamily.monthlyCosts,
          largeFamilyWorkingMonthlyCost:
            cityCostOfLivingTotals.workingClassFreq.largeFamily.monthlyCosts,
          largeFamilyMiddleMonthlyCost:
            cityCostOfLivingTotals.middleClassFreq.largeFamily.monthlyCosts,
          largeFamilyHighValueMonthlyCost:
            cityCostOfLivingTotals.highValueFreq.largeFamily.monthlyCosts,
        };
        const costOfLivingTotals = await Amplify.API.graphql({
          query: createFilterCombination,
          variables: {
            input,
          },
        });
        return costOfLivingTotals;
      } else {
        console.log(
          "FilterCombination already exists for cityCountry:",
          cityCostOfLivingTotals.cityCountry,
        );
      }
    } catch (e) {
      console.error(`error creating item`, e);
    }
  });
  await Promise.allSettled(promises);
}

async function processAllChunks(items, chunkSize) {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    await processChunk(chunk);
  }
}

processAllChunks(cityPrices, 100);
