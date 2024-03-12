/**
 * Calculates monthly cost of living in multiple cities for different family compositions and social classes.
 *
 * Gets list of cities that have sufficient pricing data.
 * Defines family compositions.
 * Loops through each city.
 *   Calculates total monthly costs for each family member.
 *   Sums family members totals to get family total.
 *   Calculates rent based on family size and social class.
 *   Adds rent to family total.
 * Returns object containing monthly costs by city, social class and family type.
 */

require("ts-node/register");
require("dotenv").config();
require = require("esm")(module);
const itemsPurchaseFrequency = require("../../data/core_data/itemsPurchaseFrequency.json");
const numbeoCityPricesActual = require("../../data/mocks/dbjson/numbeoCityPricesActual.json");
const cities500kPlus = require("../../data/mocks/dbjson/cities+5k.json");
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

const newYork = numbeoCityPricesActual.find(
  (item) => item.name === "Cairo, Egypt",
);

const getCitiesThatHaveAllPricingData = (cityData, length) => {
  const citiesWithPrices = [];
  for (const city of cityData) {
    if (city.prices.length >= length) {
      citiesWithPrices.push(city);
    }
  }
  return citiesWithPrices;
};

function createFamily(adults, children) {
  return new Array(adults)
    .fill("adult")
    .concat(new Array(children).fill("child"));
}

const single = createFamily(1, 0);
const couple = createFamily(2, 0);
const smallFamily = createFamily(2, 2);
const largeFamily = createFamily(2, 4);
let familyTypes = {
  single,
  couple,
  smallFamily,
  largeFamily,
};
const excludedItems = [
  "Apartment (1 bedroom) in City Centre, Rent Per Month",
  "Apartment (1 bedroom) Outside of Centre, Rent Per Month",
  "Apartment (3 bedrooms) in City Centre, Rent Per Month",
  "Apartment (3 bedrooms) Outside of Centre, Rent Per Month",
];
const socialClasses = ["workingClassFreq", "middleClassFreq", "highValueFreq"];

const calculateFamilyMemberMonthlyCosts = (
  city,
  acc,
  currentFamilyMember,
  socialClass,
) => {
  let familyMemberDataUnaccountedFor = [];
  city.prices.forEach((priceObj) => {
    if (!itemsPurchaseFrequency[priceObj.item_name]) {
      console.log(`No purchase frequency data for ${priceObj.item_name}`);
      familyMemberDataUnaccountedFor.push(priceObj.item_name);
      return;
    }
    if (excludedItems.includes(priceObj.item_name)) {
      console.log(`${priceObj.item_name} is in the list of excluded items`);
      return;
    }

    try {
      let monthlyTotalForItem =
        parseFloat(priceObj.average_price.toFixed(2)) *
        parseFloat(
          itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember][
            socialClass
          ].toFixed(2),
        );
      acc += monthlyTotalForItem;
    } catch (error) {
      console.error(
        `Error trying to calculate monthly total for item: ${error.message}`,
      );
    }
  });
  return [acc, familyMemberDataUnaccountedFor];
};

const calculateRent = (familyMembers, city, socialClass) => {
  let apartmentSize;
  let location =
    socialClass === "highValueFreq" ? "in City Centre" : "Outside of Centre";

  switch (familyMembers.length) {
    case 1:
    case 2:
      apartmentSize = "1 bedroom";
      break;
    case 3:
    case 4:
      apartmentSize = "3 bedrooms";
      break;
    case 5:
    case 6:
      apartmentSize = "4 bedrooms";
      break;
  }

  let apartmentKey = `Apartment (${apartmentSize}) ${location}, Rent Per Month`;
  let rentCost;
  if (
    !!city.prices.find((priceObj) => priceObj.item_name.includes(apartmentSize))
  ) {
    rentCost = city.prices.find(
      (priceObj) => priceObj.item_name === apartmentKey,
    ).average_price;
  } else {
    // find the closest apartment size, then divide by bedrooms to get room cost to add to total
    let bedSizeMinusOneRoom = apartmentSize.split(" ")[0] - 1 + " bedrooms";
    let roomCost =
      city.prices.find((priceObj) =>
        priceObj.item_name.includes(bedSizeMinusOneRoom),
      ).average_price /
      (apartmentSize.split(" ")[0] - 1);
    rentCost =
      city.prices.find((priceObj) =>
        priceObj.item_name.includes(bedSizeMinusOneRoom),
      ).average_price + roomCost;
  }
  return rentCost;
};

const getCostsForSocialClass = (city, socialClass, familyMembers) => {
  // add all family members living costs at given social class
  let unaccountedForPriceItems = [];
  let totalMonthlyCostsForFamilyExclRent = familyMembers.reduce(
    (acc, currentFamilyMember, i) => {
      [total, familyMemberDataUnaccountedFor] =
        calculateFamilyMemberMonthlyCosts(
          city,
          acc,
          currentFamilyMember,
          socialClass,
          i,
        );
      unaccountedForPriceItems = [
        ...new Set([
          ...unaccountedForPriceItems,
          ...familyMemberDataUnaccountedFor,
        ]),
      ];
      return total;
    },
    0,
  );
  let monthlyFamilyCostsIncludingRent = parseInt(
    calculateRent(familyMembers, city, socialClass) +
      totalMonthlyCostsForFamilyExclRent,
  );
  return [monthlyFamilyCostsIncludingRent, unaccountedForPriceItems];
};

const getCostsForCity = (city) => {
  let cityCosts = {};
  let cityCostsBySocialClass = socialClasses.reduce((acc, socialClass) => {
    for (const familyType in familyTypes) {
      if (!acc[socialClass]) acc[socialClass] = {};
      if (!acc["unaccountedForPriceItems"])
        acc["unaccountedForPriceItems"] = [];
      let [monthlyFamilyCostsIncludingRent, unaccountedForPriceItems] =
        getCostsForSocialClass(city, socialClass, familyTypes[familyType]);
      acc[socialClass][familyType]["monthlyCosts"] =
        monthlyFamilyCostsIncludingRent;
      acc["unaccountedForPriceItems"] = unaccountedForPriceItems;
    }
    return acc;
  }, {});
  cityCosts[city.name] = cityCostsBySocialClass;
  return cityCosts;
};

const fiftyCities = getCitiesThatHaveAllPricingData(
  numbeoCityPricesActual,
  50,
).slice(0, 10);

const monthlyCosts = fiftyCities.map((city) => getCostsForCity(city));
console.log(JSON.stringify(monthlyCosts, null, 2));
