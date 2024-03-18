/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCostOfLivingRanking = /* GraphQL */ `query GetCostOfLivingRanking($cityCountry: String!) {
  getCostOfLivingRanking(cityCountry: $cityCountry) {
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
` as GeneratedQuery<
  APITypes.GetCostOfLivingRankingQueryVariables,
  APITypes.GetCostOfLivingRankingQuery
>;
export const listCostOfLivingRankings = /* GraphQL */ `query ListCostOfLivingRankings(
  $cityCountry: String
  $filter: ModelCostOfLivingRankingFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listCostOfLivingRankings(
    cityCountry: $cityCountry
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    FilterCombination {
      cityCountry
      singleWorkingMonthlyCost
      singleMiddleMonthlyCost
      singleHighValueMonthlyCost
      coupleWorkingMonthlyCost
      coupleMiddleMonthlyCost
      coupleHighValueMonthlyCost
      smallFamilyWorkingMonthlyCost
      smallFamilyMiddleMonthlyCost
      smallFamilyHighValueMonthlyCost
      largeFamilyWorkingMonthlyCost
      largeFamilyMiddleMonthlyCost
      largeFamilyHighValueMonthlyCost
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCityPricesQueryVariables,
  APITypes.ListCityPricesQuery
>;
export const getFilterCombination = /* GraphQL */ `query GetFilterCombination($cityCountry: String!) {
  getFilterCombination(cityCountry: $cityCountry) {
    cityCountry
    singleWorkingMonthlyCost
    singleMiddleMonthlyCost
    singleHighValueMonthlyCost
    coupleWorkingMonthlyCost
    coupleMiddleMonthlyCost
    coupleHighValueMonthlyCost
    smallFamilyWorkingMonthlyCost
    smallFamilyMiddleMonthlyCost
    smallFamilyHighValueMonthlyCost
    largeFamilyWorkingMonthlyCost
    largeFamilyMiddleMonthlyCost
    largeFamilyHighValueMonthlyCost
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
` as GeneratedQuery<
  APITypes.GetFilterCombinationQueryVariables,
  APITypes.GetFilterCombinationQuery
>;
export const listFilterCombinations = /* GraphQL */ `query ListFilterCombinations(
  $cityCountry: String
  $filter: ModelFilterCombinationFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listFilterCombinations(
    cityCountry: $cityCountry
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      cityCountry
      singleWorkingMonthlyCost
      singleMiddleMonthlyCost
      singleHighValueMonthlyCost
      coupleWorkingMonthlyCost
      coupleMiddleMonthlyCost
      coupleHighValueMonthlyCost
      smallFamilyWorkingMonthlyCost
      smallFamilyMiddleMonthlyCost
      smallFamilyHighValueMonthlyCost
      largeFamilyWorkingMonthlyCost
      largeFamilyMiddleMonthlyCost
      largeFamilyHighValueMonthlyCost
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFilterCombinationsQueryVariables,
  APITypes.ListFilterCombinationsQuery
>;
