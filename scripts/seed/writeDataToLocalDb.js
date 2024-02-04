require("dotenv").config();
const axios = require("axios");
const generateSeedData = require("./generateSeedData");
const endpoint = "http://192.168.0.17:20002/graphql";
const API_KEY = process.env.APPSYNC_API_KEY;

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

async function sendToGraphQL(mutation, variables) {
  try {
    const response = await axios.post(
      endpoint,
      {
        query: mutation,
        variables: variables,
      },
      {
        headers: headers,
      },
    );
    console.log("Data sent:", response.data);
  } catch (error) {
    console.error("Error sending data:", error);
  }
}

function createCityPriceMutationInput(cityPrice) {
  return {
    numbeoCityId: cityPrice.numbeoCityId,
    city: cityPrice.city,
    country: cityPrice.country,
    currency: cityPrice.currency,
    contributors12months: cityPrice.contributors12months,
    monthLastUpdate: cityPrice.monthLastUpdate,
    cityCountry: cityPrice.cityCountry,
    contributors: cityPrice.contributors,
    yearLastUpdate: cityPrice.yearLastUpdate,
    prices: cityPrice.prices,
    usdPrices: cityPrice.usdPrices,
    images: cityPrice.images,
  };
}

function createCostOfLivingRankingMutationInput(costOfLivingRanking) {
  return {
    cityCountry: costOfLivingRanking.cityCountry,
    grossRentalYieldOutsideOfCentre:
      costOfLivingRanking.grossRentalYieldOutsideOfCentre,
    priceToRentRatioOutsideOfCentre:
      costOfLivingRanking.priceToRentRatioOutsideOfCentre,
    housePriceToIncomeRatio: costOfLivingRanking.housePriceToIncomeRatio,
    affordabilityIndex: costOfLivingRanking.affordabilityIndex,
    mortgageAsPercentageOfIncome:
      costOfLivingRanking.mortgageAsPercentageOfIncome,
    priceToRentRatioCityCentre: costOfLivingRanking.priceToRentRatioCityCentre,
    grossRentalYieldCityCentre: costOfLivingRanking.grossRentalYieldCityCentre,
  };
}

async function seedData(count) {
  for (let i = 0; i < count; i++) {
    const data = generateSeedData();
    const cityPriceInput = createCityPriceMutationInput(
      data.createRandomCityPrice,
    );
    const costOfLivingRankingInput = createCostOfLivingRankingMutationInput(
      data.createRandomCostOfLivingRanking,
    );

    const createCityPriceMutation = `
    mutation CreateCityPrice($input: CreateCityPriceInput!) {
        createCityPrice(input: $input) {
            numbeoCityId
            city
            country
            currency
            contributors12Months
            monthLastUpdate
            cityCountry
            contributors
            yearLastUpdate
            prices {
                lowestPrice
                averagePrice
                highestPrice
                dataPoints
                itemName
                itemId
                }
                usdPrices {
                lowestPrice
                averagePrice
                highestPrice
                dataPoints
                itemName
                itemId
                }
                images {
                unsplashId
                description
                urls {
                    raw
                    full
                    regular
                    small
                    thumb
                    smallS3
                }
            }
        }
    }


`;

    const createCostOfLivingRankingMutation = `
    mutation CreateCostOfLivingRanking($input: CreateCostOfLivingRankingInput!) {
        createCostOfLivingRanking(input: $input) {
            cityCountry
            grossRentalYieldOutsideOfCentre
            priceToRentRatioOutsideOfCentre
            housePriceToIncomeRatio
            affordabilityIndex
            mortgageAsPercentageOfIncome
            priceToRentRatioCityCentre
            grossRentalYieldCityCentre
        }
    }
`;

    await sendToGraphQL(createCityPriceMutation, { input: cityPriceInput });
    await sendToGraphQL(createCostOfLivingRankingMutation, {
      input: costOfLivingRankingInput,
    });
  }
}

seedData(10); // Seeds 10 records
