require = require("esm")(module);

const { faker } = require("@faker-js/faker");
import * as API from "../../src/API";

export function createRandomCityPrice(): API.CityPrice {
  return {
    __typename: "CityPrice",
    cityCountry: faker.address.city(),
    city: faker.address.city(),
    country: faker.address.country(),
    numbeoCityId: faker.datatype.number(),
    currency: faker.finance.currencyCode(),
    prices: faker.helpers.multiple(createRandomPrice, { count: 3 }),
    usdPrices: faker.helpers.multiple(createRandomPrice("UsdPrice"), { count: 3 }),
    contributors12months: faker.datatype.number(),
    monthLastUpdate: faker.datatype.number({ min: 1, max: 12 }),
    contributors: faker.datatype.number(),
    yearLastUpdate: faker.datatype.number({ min: 2000, max: 2022 }),
    images: faker.helpers.multiple(createRandomImageObject, { count: 3 }),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}

const randomUrls: API.Urls = {
  __typename: "Urls",
  raw: faker.image.imageUrl(),
  full: faker.image.imageUrl(),
  regular: faker.image.imageUrl(),
  small: faker.image.imageUrl(),
  thumb: faker.image.imageUrl(),
  small_s3: faker.image.imageUrl(),
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

let createRandomPrice = (priceTypename = '') => {
  return {
    __typename: priceTypename || "Price",
    lowest_price: faker.commerce.price(),
    average_price: faker.commerce.price(),
    highest_price: faker.commerce.price(),
    data_points: faker.datatype.number(),
    item_name: faker.commerce.productName(),
    item_id: faker.datatype.number(),
  };
}

export const CITYPRICES: API.CityPrice[] = faker.helpers.multiple(
  createRandomCityPrice,
  {
    count: 5,
  },
);
