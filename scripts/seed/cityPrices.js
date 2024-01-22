// require = require("esm")(module);

// const { faker } = require("@faker-js/faker");
// import * as API from "../../src/API";

import { faker } from "@faker-js/faker";

export function createRandomCityPrice() {
  return {
    __typename: "CityPrice",
    cityCountry: faker.address.city(),
    city: faker.address.city(),
    country: faker.address.country(),
    numbeoCityId: faker.datatype.number(),
    currency: faker.finance.currencyCode(),
    prices: faker.helpers.multiple(() => createRandomPrice(), { count: 3 }),
    usdPrices: faker.helpers.multiple(() => createRandomPrice("UsdPrice"), { count: 3 }),
    contributors12months: faker.datatype.number(),
    monthLastUpdate: faker.datatype.number({ min: 1, max: 12 }),
    contributors: faker.datatype.number(),
    yearLastUpdate: faker.datatype.number({ min: 2000, max: 2022 }),
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
    unsplashId: faker.datatype.uuid(),
    description: faker.lorem.sentence(),
    urls: randomUrls,
    height: faker.datatype.number(),
    width: faker.datatype.number(),
    unsplashLikes: faker.datatype.number(),
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

