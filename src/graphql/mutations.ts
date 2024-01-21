/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCostOfLivingRanking = /* GraphQL */ `mutation CreateCostOfLivingRanking(
  $input: CreateCostOfLivingRankingInput!
  $condition: ModelCostOfLivingRankingConditionInput
) {
  createCostOfLivingRanking(input: $input, condition: $condition) {
    city
    city_name
    cityCountry
    country
    gross_rental_yield_outside_of_centre
    price_to_rent_ratio_outside_of_centre
    house_price_to_income_ratio
    affordability_index
    mortgage_as_percentage_of_income
    price_to_rent_ratio_city_centre
    gross_rental_yield_city_centre
    city_id
    cityPrice {
      cityCountry
      city
      country
      numbeoCityId
      currency
      contributors12months
      monthLastUpdate
      contributors
      yearLastUpdate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCostOfLivingRankingMutationVariables,
  APITypes.CreateCostOfLivingRankingMutation
>;
export const updateCostOfLivingRanking = /* GraphQL */ `mutation UpdateCostOfLivingRanking(
  $input: UpdateCostOfLivingRankingInput!
  $condition: ModelCostOfLivingRankingConditionInput
) {
  updateCostOfLivingRanking(input: $input, condition: $condition) {
    city
    city_name
    cityCountry
    country
    gross_rental_yield_outside_of_centre
    price_to_rent_ratio_outside_of_centre
    house_price_to_income_ratio
    affordability_index
    mortgage_as_percentage_of_income
    price_to_rent_ratio_city_centre
    gross_rental_yield_city_centre
    city_id
    cityPrice {
      cityCountry
      city
      country
      numbeoCityId
      currency
      contributors12months
      monthLastUpdate
      contributors
      yearLastUpdate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCostOfLivingRankingMutationVariables,
  APITypes.UpdateCostOfLivingRankingMutation
>;
export const deleteCostOfLivingRanking = /* GraphQL */ `mutation DeleteCostOfLivingRanking(
  $input: DeleteCostOfLivingRankingInput!
  $condition: ModelCostOfLivingRankingConditionInput
) {
  deleteCostOfLivingRanking(input: $input, condition: $condition) {
    city
    city_name
    cityCountry
    country
    gross_rental_yield_outside_of_centre
    price_to_rent_ratio_outside_of_centre
    house_price_to_income_ratio
    affordability_index
    mortgage_as_percentage_of_income
    price_to_rent_ratio_city_centre
    gross_rental_yield_city_centre
    city_id
    cityPrice {
      cityCountry
      city
      country
      numbeoCityId
      currency
      contributors12months
      monthLastUpdate
      contributors
      yearLastUpdate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCostOfLivingRankingMutationVariables,
  APITypes.DeleteCostOfLivingRankingMutation
>;
export const createCityPrice = /* GraphQL */ `mutation CreateCityPrice(
  $input: CreateCityPriceInput!
  $condition: ModelCityPriceConditionInput
) {
  createCityPrice(input: $input, condition: $condition) {
    cityCountry
    city
    country
    numbeoCityId
    usdPrices {
      lowest_price
      average_price
      highest_price
      data_points
      item_name
      item_id
      __typename
    }
    currency
    prices {
      item_id
      item_name
      lowest_price
      average_price
      highest_price
      data_points
      __typename
    }
    contributors12months
    monthLastUpdate
    contributors
    yearLastUpdate
    images {
      unsplashId
      description
      height
      width
      unsplashLikes
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCityPriceMutationVariables,
  APITypes.CreateCityPriceMutation
>;
export const updateCityPrice = /* GraphQL */ `mutation UpdateCityPrice(
  $input: UpdateCityPriceInput!
  $condition: ModelCityPriceConditionInput
) {
  updateCityPrice(input: $input, condition: $condition) {
    cityCountry
    city
    country
    numbeoCityId
    usdPrices {
      lowest_price
      average_price
      highest_price
      data_points
      item_name
      item_id
      __typename
    }
    currency
    prices {
      item_id
      item_name
      lowest_price
      average_price
      highest_price
      data_points
      __typename
    }
    contributors12months
    monthLastUpdate
    contributors
    yearLastUpdate
    images {
      unsplashId
      description
      height
      width
      unsplashLikes
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCityPriceMutationVariables,
  APITypes.UpdateCityPriceMutation
>;
export const deleteCityPrice = /* GraphQL */ `mutation DeleteCityPrice(
  $input: DeleteCityPriceInput!
  $condition: ModelCityPriceConditionInput
) {
  deleteCityPrice(input: $input, condition: $condition) {
    cityCountry
    city
    country
    numbeoCityId
    usdPrices {
      lowest_price
      average_price
      highest_price
      data_points
      item_name
      item_id
      __typename
    }
    currency
    prices {
      item_id
      item_name
      lowest_price
      average_price
      highest_price
      data_points
      __typename
    }
    contributors12months
    monthLastUpdate
    contributors
    yearLastUpdate
    images {
      unsplashId
      description
      height
      width
      unsplashLikes
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCityPriceMutationVariables,
  APITypes.DeleteCityPriceMutation
>;
