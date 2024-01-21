require = require("esm")(module);

const { faker } = require("@faker-js/faker");
import * as API from "../../src/API";
import { createRandomCityPrice } from "./cityPrices";

export function createRandomCostOfLivingRanking(): API.CostOfLivingRanking {
  return {
    __typename: "CostOfLivingRanking",
    city: faker.address.city(),
    city_name: faker.address.cityName(),
    cityCountry: faker.address.city() + ", " + faker.address.country(),
    country: faker.address.country(),
    gross_rental_yield_outside_of_centre: faker.finance.amount(),
    price_to_rent_ratio_outside_of_centre: faker.finance.amount(),
    house_price_to_income_ratio: faker.finance.amount(),
    affordability_index: faker.finance.amount(),
    mortgage_as_percentage_of_income: faker.finance.amount(),
    price_to_rent_ratio_city_centre: faker.finance.amount(),
    gross_rental_yield_city_centre: faker.finance.amount(),
    city_id: faker.datatype.number(),
    cityPrice: createRandomCityPrice, { count: 1 }[0],
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}

export const COSTOFLIVINGRANKINGS: API.CostOfLivingRanking[] =
  faker.helpers.multiple(createRandomCostOfLivingRanking, {
    count: 5,
  });
