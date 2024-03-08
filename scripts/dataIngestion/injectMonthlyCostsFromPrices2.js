require("ts-node/register");
require("dotenv").config();
require = require("esm")(module);
const itemsPurchaseFrequency = require("../../data/core_data/itemsPurchaseFrequency.json");
const numbeoCityPricesActual = require("../../data/mocks/dbjson/numbeoCityPricesActual.json");
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

getCityPricesFromNumbeoJson = async () => {
  let missingItems = newYork.prices
    .filter(
      (priceObj) => !itemsPurchaseFrequency.hasOwnProperty(priceObj.item_name),
    )
    .map((priceObj) => priceObj.item_name);
  console.log(missingItems);
};

const getCitiesThatHaveAllPricingData = () => {
  const citiesWithPrices = [];
  for (const city of numbeoCityPricesActual) {
    if (city.prices.length > 200) {
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
    if (!priceObj.item_name) {
      console.log(`No item name ${priceObj.item_name}`);
    }
    if (priceObj.average_price === 0) {
      console.log(`Average price for ${priceObj.item_name} is 0`);
    }
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
      if (currentFamilyMember === "adult") {
        console.log(
          "*************************** total start ***************************",
        );
        console.log("family member", currentFamilyMember);
        console.log(
          priceObj.item_name,
          "item price: ",
          priceObj.average_price.toFixed(2),
        );
        console.log(
          "frequency per month: ",
          itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember][
            socialClass
          ].toFixed(2),
        );
        console.log("monthly total for item: ", monthlyTotalForItem);
      }
      acc += monthlyTotalForItem;
    } catch (error) {
      console.error(`An error occurred: ${error.message}`);
    }
  });
  return [acc, familyMemberDataUnaccountedFor];
};

// Run the script
getCityPricesFromNumbeoJson();