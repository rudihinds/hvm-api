// import puchase frequency by social class json
// get all cities that have prices (test with a few cities first)
// for each city, calculate the monthly cost of living for each social class by multiplying the relative purchase frequency by the price
// build each family type total and insert into the FilterCombination table
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

// const getCityPrices = async () => {
//   const citiesWithPrices = [];
//   try {
//     const cities = await API.graphql(
//       graphqlOperation(listCityPrices, { limit: 100 }),
//     );
//     for (const city of cities.data.listCityPrices.items) {
//       try {
//         const fullCityPrice = await API.graphql(
//           graphqlOperation(getCityPrice, { cityCountry: city.cityCountry }),
//         );
//         citiesWithPrices.push({
//           cityCountry: city.cityCountry,
//           prices: fullCityPrice.data.getCityPrice.prices,
//         });
//       } catch (error) {
//         console.error(
//           `Failed to get prices for city ${city.cityCountry}: ${error}`,
//         );
//       }
//     }
//   } catch (error) {
//     console.error(`Failed to list cities: ${error}`);
//   }
//   return citiesWithPrices;
// };

const newYork = numbeoCityPricesActual.find(
  (item) => item.name === "New York, NY, United States",
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
    if (city.prices.length > 50) {
      citiesWithPrices.push(city);
    }
  }
  return citiesWithPrices;
};

//if an item name from our purchase frequency data is missing from any one city's prices, make a map of all the cities within the same country
// and then check if the item is available in any of the other cities in the same country
// if it is, then we can use the price from that city for the missing item
// if it isnt, make a note of the missing items and add to database for later
// lets create an object for each city that has cityCountry, totalMonthlyCosts for each social class, and the missing items if any
// lets start with 10 and review

const SINGLE_WORKING_CLASS = "singleWorkingClass";
const SINGLE_MIDDLE_CLASS = "singleMiddleClass";
const SINGLE_HIGH_VALUE = "singleHighValue";
const COUPLE_WORKING_CLASS = "coupleWorkingClass";
const COUPLE_MIDDLE_CLASS = "coupleMiddleClass";
const COUPLE_HIGH_VALUE = "coupleHighValue";
const SMALL_FAMILY_WORKING_CLASS = "smallFamilyWorkingClass";
const SMALL_FAMILY_MIDDLE_CLASS = "smallFamilyMiddleClass";
const SMALL_FAMILY_HIGH_VALUE = "smallFamilyHighValue";
const LARGE_FAMILY_WORKING_CLASS = "largeFamilyWorkingClass";
const LARGE_FAMILY_MIDDLE_CLASS = "largeFamilyMiddleClass";
const LARGE_FAMILY_HIGH_VALUE = "largeFamilyHighValue";

const single = ["adult"];
const couple = ["adult", "adult"];
const smallFamily = ["adult", "adult", "child", "child"];
const largeFamily = ["adult", "adult", "child", "child", "child", "child"];

// "Meal for 2 People, Mid-range Restaurant, Three-course, Restaurants", "Apartment (1 bedroom) in City Centre, Rent Per Month"
// excluded items:
// "Apartment (1 bedroom) in City Centre, Rent Per Month"
// "Apartment (1 bedroom) Outside of Centre, Rent Per Month"
// "Apartment (3 bedrooms) in City Centre, Rent Per Month"
// "Apartment (3 bedrooms) Outside of Centre, Rent Per Month"

const excludedItems = [
  "Apartment (1 bedroom) in City Centre, Rent Per Month",
  "Apartment (1 bedroom) Outside of Centre, Rent Per Month",
  "Apartment (3 bedrooms) in City Centre, Rent Per Month",
  "Apartment (3 bedrooms) Outside of Centre, Rent Per Month",
];

const socialClasses = ["workingClassFreq", "middleClassFreq", "highValueFreq"];

const getCostsForSocialClass = (city, socialClass, familyMembers) => {
  // loop through family members, get sum of each price item for each family member by social class frequency
  // add together to get total monthly cost for that family
  // return total monthly cost

return familyMembers.reduce((acc, currentFamilyMember, i) => {
  if (i > 0) {
    console.log("in this case dont add rent");
  } else {
    city.prices.forEach((priceObj) => {
      if (
        priceObj.average_price !== 0 &&
        itemsPurchaseFrequency[priceObj.item_name] &&
        itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember] &&
        itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember][
          socialClass
        ] !== 0
      ) {
        let monthlyTotalForItem =
          parseFloat(priceObj.average_price.toFixed(2)) *
          parseFloat(
            itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember][
              socialClass
            ].toFixed(2),
          );
        acc += monthlyTotalForItem;
      }
    });
  }
  return acc;
}, 0);
};

console.log(getCostsForSocialClass(newYork, "workingClassFreq", largeFamily));

const createMonthlyCosts = (city, familyMembers) => {
  // loop through prices, use item_name against purchase frequency,
  try {
    familyMembers.reduce((acc, currentFamilyMember, i) => {
      if (i > 0) {
        console.log("in this case dont add rent");
      } else {
        return;
      }
    }, 0);
  } catch (error) {
    console.error("error: ", error);
  }
};

createMonthlyCosts("new york", largeFamily);

// console.log('numbeo json length: ', numbeoCityPricesActual.length);
// const fiftyCities = getCitiesThatHaveAllPricingData().slice(0, 500);
// fiftyCities.forEach((city) => {
//   let itemPricesForCity = city.prices.map((priceObj) => priceObj.item_name);
//   let missingItems = Object.keys(itemsPurchaseFrequency).filter(
//     (item) => !itemPricesForCity.includes(item),
//   );
//   console.log(city.name);
//   console.log(missingItems);
// });

// getCityPricesFromNumbeoJson();
// console.log(Object.keys(itemsPurchaseFrequency).length);

// getCityPrices().then((citiesWithPrices) => {
//   citiesWithPrices.forEach((city) => {
//     for (const priceObj of city.prices) {
//       if (
//         Object.keys(itemsPurchaseFrequency) &&
//         !Object.keys(itemsPurchaseFrequency).includes(priceObj.item_name)
//       ) {
//         console.log("yolo");
//       }
//     }
//   });
// });

// console.log(Object.keys(itemsPurchaseFrequency));
