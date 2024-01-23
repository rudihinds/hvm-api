// require = require("esm")(module);

// const { faker } = require("@faker-js/faker");
// import * as API from "../../src/API";

import { faker } from "@faker-js/faker";

export function createRandomCityPrice() {
  return {
    __typename: "CityPrice",
    cityCountry: faker.location.city(),
    city: faker.location.city(),
    country: faker.location.country(),
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
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}

const randomUrls = {
  __typename: "Urls",
  raw: faker.image.url(),
  full: faker.image.url(),
  regular: faker.image.url(),
  small: faker.image.url(),
  thumb: faker.image.url(),
  small_s3: faker.image.url(),
};

let createRandomImageObject = () => {
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

let createRandomPrice = (priceTypename = "") => {
  return {
    __typename: priceTypename || "Price",
    lowest_price: 10,
    average_price: 10,
    highest_price: 10,
    data_points: 10,
    item_name: "sdw",
    item_id: 10,
  };
};

export const cityPrices = (count) => {
  return faker.helpers.multiple(createRandomCityPrice, {
    count: count,
  });
};
