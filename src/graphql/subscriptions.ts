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
    cityCountry
    grossRentalYieldOutsideOfCentre
    priceToRentRatioOutsideOfCentre
    housePriceToIncomeRatio
    affordabilityIndex
    mortgageAsPercentageOfIncome
    priceToRentRatioCityCentre
    grossRentalYieldCityCentre
    cityPrice {
      cityCountry
      city
      country
      currency
      contributors12Months
      monthLastUpdate
      contributors
      yearLastUpdate
      numbeoCityId
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
    cityCountry
    grossRentalYieldOutsideOfCentre
    priceToRentRatioOutsideOfCentre
    housePriceToIncomeRatio
    affordabilityIndex
    mortgageAsPercentageOfIncome
    priceToRentRatioCityCentre
    grossRentalYieldCityCentre
    cityPrice {
      cityCountry
      city
      country
      currency
      contributors12Months
      monthLastUpdate
      contributors
      yearLastUpdate
      numbeoCityId
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
    cityCountry
    grossRentalYieldOutsideOfCentre
    priceToRentRatioOutsideOfCentre
    housePriceToIncomeRatio
    affordabilityIndex
    mortgageAsPercentageOfIncome
    priceToRentRatioCityCentre
    grossRentalYieldCityCentre
    cityPrice {
      cityCountry
      city
      country
      currency
      contributors12Months
      monthLastUpdate
      contributors
      yearLastUpdate
      numbeoCityId
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
    prices {
      itemId
      itemName
      lowestPrice
      averagePrice
      highestPrice
      dataPoints
      __typename
    }
    usdPrices {
      lowestPrice
      averagePrice
      highestPrice
      dataPoints
      itemName
      itemId
      __typename
    }
    currency
    contributors12Months
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
    numbeoCityId
    costOfLivingRanking {
      cityCountry
      grossRentalYieldOutsideOfCentre
      priceToRentRatioOutsideOfCentre
      housePriceToIncomeRatio
      affordabilityIndex
      mortgageAsPercentageOfIncome
      priceToRentRatioCityCentre
      grossRentalYieldCityCentre
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
  APITypes.OnCreateCityPriceSubscriptionVariables,
  APITypes.OnCreateCityPriceSubscription
>;
export const onUpdateCityPrice = /* GraphQL */ `subscription OnUpdateCityPrice($filter: ModelSubscriptionCityPriceFilterInput) {
  onUpdateCityPrice(filter: $filter) {
    cityCountry
    city
    country
    prices {
      itemId
      itemName
      lowestPrice
      averagePrice
      highestPrice
      dataPoints
      __typename
    }
    usdPrices {
      lowestPrice
      averagePrice
      highestPrice
      dataPoints
      itemName
      itemId
      __typename
    }
    currency
    contributors12Months
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
    numbeoCityId
    costOfLivingRanking {
      cityCountry
      grossRentalYieldOutsideOfCentre
      priceToRentRatioOutsideOfCentre
      housePriceToIncomeRatio
      affordabilityIndex
      mortgageAsPercentageOfIncome
      priceToRentRatioCityCentre
      grossRentalYieldCityCentre
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
  APITypes.OnUpdateCityPriceSubscriptionVariables,
  APITypes.OnUpdateCityPriceSubscription
>;
export const onDeleteCityPrice = /* GraphQL */ `subscription OnDeleteCityPrice($filter: ModelSubscriptionCityPriceFilterInput) {
  onDeleteCityPrice(filter: $filter) {
    cityCountry
    city
    country
    prices {
      itemId
      itemName
      lowestPrice
      averagePrice
      highestPrice
      dataPoints
      __typename
    }
    usdPrices {
      lowestPrice
      averagePrice
      highestPrice
      dataPoints
      itemName
      itemId
      __typename
    }
    currency
    contributors12Months
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
    numbeoCityId
    costOfLivingRanking {
      cityCountry
      grossRentalYieldOutsideOfCentre
      priceToRentRatioOutsideOfCentre
      housePriceToIncomeRatio
      affordabilityIndex
      mortgageAsPercentageOfIncome
      priceToRentRatioCityCentre
      grossRentalYieldCityCentre
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
  APITypes.OnDeleteCityPriceSubscriptionVariables,
  APITypes.OnDeleteCityPriceSubscription
>;
