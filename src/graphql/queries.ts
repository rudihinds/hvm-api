/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCostOfLivingRanking = /* GraphQL */ `query GetCostOfLivingRanking($city: String!) {
  getCostOfLivingRanking(city: $city) {
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
` as GeneratedQuery<
  APITypes.GetCostOfLivingRankingQueryVariables,
  APITypes.GetCostOfLivingRankingQuery
>;
export const listCostOfLivingRankings = /* GraphQL */ `query ListCostOfLivingRankings(
  $city: String
  $filter: ModelCostOfLivingRankingFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCostOfLivingRankings(
    city: $city
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCostOfLivingRankingsQueryVariables,
  APITypes.ListCostOfLivingRankingsQuery
>;
export const getCityPrice = /* GraphQL */ `query GetCityPrice($cityCountry: String!) {
  getCityPrice(cityCountry: $cityCountry) {
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
` as GeneratedQuery<
  APITypes.GetCityPriceQueryVariables,
  APITypes.GetCityPriceQuery
>;
export const listCityPrices = /* GraphQL */ `query ListCityPrices(
  $cityCountry: String
  $filter: ModelCityPriceFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCityPrices(
    cityCountry: $cityCountry
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCityPricesQueryVariables,
  APITypes.ListCityPricesQuery
>;
