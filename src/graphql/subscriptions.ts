/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCostOfLivingRanking = /* GraphQL */ `subscription OnCreateCostOfLivingRanking(
  $filter: ModelSubscriptionCostOfLivingRankingFilterInput
) {
  onCreateCostOfLivingRanking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCostOfLivingRankingSubscriptionVariables,
  APITypes.OnCreateCostOfLivingRankingSubscription
>;
export const onUpdateCostOfLivingRanking = /* GraphQL */ `subscription OnUpdateCostOfLivingRanking(
  $filter: ModelSubscriptionCostOfLivingRankingFilterInput
) {
  onUpdateCostOfLivingRanking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCostOfLivingRankingSubscriptionVariables,
  APITypes.OnUpdateCostOfLivingRankingSubscription
>;
export const onDeleteCostOfLivingRanking = /* GraphQL */ `subscription OnDeleteCostOfLivingRanking(
  $filter: ModelSubscriptionCostOfLivingRankingFilterInput
) {
  onDeleteCostOfLivingRanking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCostOfLivingRankingSubscriptionVariables,
  APITypes.OnDeleteCostOfLivingRankingSubscription
>;
export const onCreateCityPrice = /* GraphQL */ `subscription OnCreateCityPrice($filter: ModelSubscriptionCityPriceFilterInput) {
  onCreateCityPrice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCityPriceSubscriptionVariables,
  APITypes.OnCreateCityPriceSubscription
>;
export const onUpdateCityPrice = /* GraphQL */ `subscription OnUpdateCityPrice($filter: ModelSubscriptionCityPriceFilterInput) {
  onUpdateCityPrice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCityPriceSubscriptionVariables,
  APITypes.OnUpdateCityPriceSubscription
>;
export const onDeleteCityPrice = /* GraphQL */ `subscription OnDeleteCityPrice($filter: ModelSubscriptionCityPriceFilterInput) {
  onDeleteCityPrice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCityPriceSubscriptionVariables,
  APITypes.OnDeleteCityPriceSubscription
>;
