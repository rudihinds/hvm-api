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
` as GeneratedMutation<
  APITypes.CreateCostOfLivingRankingMutationVariables,
  APITypes.CreateCostOfLivingRankingMutation
>;
export const updateCostOfLivingRanking = /* GraphQL */ `mutation UpdateCostOfLivingRanking(
  $input: UpdateCostOfLivingRankingInput!
  $condition: ModelCostOfLivingRankingConditionInput
) {
  updateCostOfLivingRanking(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCostOfLivingRankingMutationVariables,
  APITypes.UpdateCostOfLivingRankingMutation
>;
export const deleteCostOfLivingRanking = /* GraphQL */ `mutation DeleteCostOfLivingRanking(
  $input: DeleteCostOfLivingRankingInput!
  $condition: ModelCostOfLivingRankingConditionInput
) {
  deleteCostOfLivingRanking(input: $input, condition: $condition) {
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
      country
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
      country
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
      country
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
` as GeneratedMutation<
  APITypes.DeleteCityPriceMutationVariables,
  APITypes.DeleteCityPriceMutation
>;
export const createFilterCombination = /* GraphQL */ `mutation CreateFilterCombination(
  $input: CreateFilterCombinationInput!
  $condition: ModelFilterCombinationConditionInput
) {
  createFilterCombination(input: $input, condition: $condition) {
    cityCountry
    country
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
` as GeneratedMutation<
  APITypes.CreateFilterCombinationMutationVariables,
  APITypes.CreateFilterCombinationMutation
>;
export const updateFilterCombination = /* GraphQL */ `mutation UpdateFilterCombination(
  $input: UpdateFilterCombinationInput!
  $condition: ModelFilterCombinationConditionInput
) {
  updateFilterCombination(input: $input, condition: $condition) {
    cityCountry
    country
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
` as GeneratedMutation<
  APITypes.UpdateFilterCombinationMutationVariables,
  APITypes.UpdateFilterCombinationMutation
>;
export const deleteFilterCombination = /* GraphQL */ `mutation DeleteFilterCombination(
  $input: DeleteFilterCombinationInput!
  $condition: ModelFilterCombinationConditionInput
) {
  deleteFilterCombination(input: $input, condition: $condition) {
    cityCountry
    country
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
` as GeneratedMutation<
  APITypes.DeleteFilterCombinationMutationVariables,
  APITypes.DeleteFilterCombinationMutation
>;
