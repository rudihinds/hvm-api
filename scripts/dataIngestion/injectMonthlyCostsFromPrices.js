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

//if an item name from our purchase frequency data is missing from any one city's prices, make a map of all the cities within the same country
// and then check if the item is available in any of the other cities in the same country
// if it is, then we can use the price from that city for the missing item
// if it isnt, make a note of the missing items and add to database for later
// lets create an object for each city that has cityCountry, totalMonthlyCosts for each social class, and the missing items if any
// lets start with 10 and review

function createFamily(adults, children) {
  return new Array(adults)
    .fill("adult")
    .concat(new Array(children).fill("child"));
}

const single = createFamily(1, 0);
const couple = createFamily(2, 0);
const smallFamily = createFamily(2, 2);
const largeFamily = createFamily(2, 4);

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

// if (
//   priceObj.average_price !== 0 &&
//   itemsPurchaseFrequency[priceObj.item_name] &&
//   itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember] &&
//   itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember][
//     socialClass
//   ] !== 0 &&
//   familyMemberIndex > 0 &&
//   !excludedItems.includes(priceObj.item_name)
// )
const calculateFamilyMemberMonthlyCosts = (
  city,
  acc,
  currentFamilyMember,
  socialClass,
  familyMemberIndex,
) => {
  let familyMemberDataUnaccountedFor = [];
  city.prices.forEach((priceObj) => {
    if (!priceObj.item_name) {
      console.log(`No item name ${priceObj.item_name}`);
    }
    // console.log("item name: ", priceObj.item_name);
    if (priceObj.average_price === 0) {
      // console.log(`Average price for ${priceObj.item_name} is 0`);
    }
    // console.log("average price: ", priceObj.average_price);
    if (!itemsPurchaseFrequency[priceObj.item_name]) {
      console.log(`No purchase frequency data for ${priceObj.item_name}`);
      familyMemberDataUnaccountedFor.push(priceObj.item_name);
      return;
    }
    // console.log(
    //   "purchase frequency" + ` for ${priceObj.item_name}`,
    //   itemsPurchaseFrequency[priceObj.item_name],
    // );
    if (!itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember]) {
      console.log(
        `No purchase frequency data for ${priceObj.item_name} for family member ${currentFamilyMember}`,
      );
    }
    // console.log(
    //   `Purchase frequency for ${priceObj.item_name} for family member ${currentFamilyMember}`,
    //   itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember],
    // );
    if (
      itemsPurchaseFrequency[priceObj.item_name][currentFamilyMember][
        socialClass
      ] === 0
    ) {
      // console.log(
      //   `Purchase frequency for ${priceObj.item_name} for family member ${currentFamilyMember} in social class ${socialClass} is 0`,
      // );
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
        // console.log("item price", priceObj.average_price.toFixed(2));
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
    city.prices.find((priceObj) => !priceObj.item_name.includes(apartmentSize))
  ) {
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
  } else {
    rentCost = city.prices.find(
      (priceObj) => priceObj.item_name === apartmentKey,
    ).average_price;
  }
  return rentCost;
};

const getCostsForSocialClass = (city, socialClass, familyMembers) => {
  // loop through family members, get sum of each price item for each family member by social class frequency
  // add together to get total monthly cost for that family
  // return total monthly cost

  // add all family members living costs
  let totalMonthlyCostsForFamilyExclRent = familyMembers.reduce(
    (acc, currentFamilyMember, i) => {
      let [total, familyMemberDataUnaccountedFor] =
        calculateFamilyMemberMonthlyCosts(
          city,
          acc,
          currentFamilyMember,
          socialClass,
          i,
        );
      console.log("total", total);
      console.log("unaccounted", familyMemberDataUnaccountedFor);
      return total;
    },
    0,
  );
  // add rent
  let apartmentSize;
};

// console.log(
//   "grand total",
//   getCostsForSocialClass(newYork, "workingClassFreq", couple),
// );

// const checkFrequencyData = () => {
//   for (itemKey in itemsPurchaseFrequency) {
//     let item = itemsPurchaseFrequency[itemKey];
//     console.log(item.child == undefined)
//   }
// };
// checkFrequencyData()

// createMonthlyCosts("new york", largeFamily);

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
