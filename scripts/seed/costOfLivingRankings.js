const { faker } = require("@faker-js/faker");
const cityPrices = require("./cityPrices");

const { cityCountry } = cityPrices();

module.exports = function createRandomCostOfLivingRanking() {
  return {
    __typename: "CostOfLivingRanking",
    cityCountry,
    grossRentalYieldOutsideOfCentre: faker.finance.amount(),
    priceToRentRatioOutsideOfCentre: faker.finance.amount(),
    housePriceToIncomeRatio: faker.finance.amount(),
    affordabilityIndex: faker.finance.amount(),
    mortgageAsPercentageOfIncome: faker.finance.amount(),
    priceToRentRatioCityCentre: faker.finance.amount(),
    grossRentalYieldCityCentre: faker.finance.amount(),
  };
};
