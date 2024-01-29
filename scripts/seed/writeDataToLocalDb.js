const axios = require("axios");
const generateSeedData = require("./generateSeedData");

const endpoint = "YOUR_GRAPHQL_ENDPOINT";

async function sendToGraphQL(mutation, variables) {
  try {
    const response = await axios.post(endpoint, {
      query: mutation,
      variables: variables,
    });
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
    mutation CreateCityPrice($input: CityPriceInput!) {
        createCityPrice(input: $input) {
            numbeoCityId
            city
            country
            currency
            contributors12months
            monthLastUpdate
            cityCountry
            contributors
            yearLastUpdate
            prices {
                lowest_price
                average_price
                highest_price
                data_points
                item_name
                item_id
            }
            usdPrices {
                lowest_price
                average_price
                highest_price
                data_points
                item_name
                item_id
            }
            images {
                unsplashId
                name
                city
                description
                alt_description
                urls {
                    raw
                    full
                    regular
                    small
                    thumb
                    small_s3
                }
            }
        }
    }

`;

    const createCostOfLivingRankingMutation = `
    mutation CreateCostOfLivingRanking($input: CostOfLivingRankingInput!) {
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
