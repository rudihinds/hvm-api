// require = require("esm")(module);

// const { faker } = require("@faker-js/faker");
// import * as API from "../../src/API";

const {faker} =  require("@faker-js/faker")

module.exports = function createRandomCityPrice() {
  let country = faker.location.country();
  let city = faker.location.city();
  return {
    __typename: "CityPrice",
    cityCountry: city + ", " + country,
    city: city,
    country,
    numbeoCityId: faker.number.int(),
    currency: faker.finance.currencyCode(),
    prices: faker.helpers.multiple(() => createRandomPrice(), { count: 3 }),
    usdPrices: faker.helpers.multiple(() => createRandomPrice("UsdPrice"), {
      count: 3,
    }),
    contributors12months: faker.number.int(),
    monthLastUpdate: faker.number.int({ min: 1, max: 12 }),
    contributors: faker.number.int(),
    yearLastUpdate: faker.number.int({ min: 2000, max: 2022 }),
    images: faker.helpers.multiple(createRandomImageObject, { count: 3 }),
  };
}

const randomUrls = {
  __typename: "Urls",
  raw: faker.image.url(),
  full: faker.image.url(),
  regular: faker.image.url(),
  small: faker.image.url(),
  thumb: faker.image.url(),
  smallS3: faker.image.url(),
};

const createRandomImageObject = () => {
  return {
    __typename: "ImageObject",
    unsplashId: faker.string.uuid(),
    description: faker.lorem.sentence(),
    urls: randomUrls,
    height: faker.number.int(),
    width: faker.number.int(),
    unsplashLikes: faker.number.int(),
  };
};

const createRandomPrice = (priceTypename = "") => {
  return {
    __typename: priceTypename || "Price",
    lowestPrice: 10,
    averagePrice: 10,
    highestPrice: 10,
    dataPoints: 10,
    itemName: "sdw",
    itemId: 10,
  };
};