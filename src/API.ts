/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCostOfLivingRankingInput = {
  cityCountry: string,
  grossRentalYieldOutsideOfCentre: number,
  priceToRentRatioOutsideOfCentre: number,
  housePriceToIncomeRatio: number,
  affordabilityIndex: number,
  mortgageAsPercentageOfIncome: number,
  priceToRentRatioCityCentre: number,
  grossRentalYieldCityCentre: number,
};

export type ModelCostOfLivingRankingConditionInput = {
  grossRentalYieldOutsideOfCentre?: ModelFloatInput | null,
  priceToRentRatioOutsideOfCentre?: ModelFloatInput | null,
  housePriceToIncomeRatio?: ModelFloatInput | null,
  affordabilityIndex?: ModelFloatInput | null,
  mortgageAsPercentageOfIncome?: ModelFloatInput | null,
  priceToRentRatioCityCentre?: ModelFloatInput | null,
  grossRentalYieldCityCentre?: ModelFloatInput | null,
  and?: Array< ModelCostOfLivingRankingConditionInput | null > | null,
  or?: Array< ModelCostOfLivingRankingConditionInput | null > | null,
  not?: ModelCostOfLivingRankingConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type CostOfLivingRanking = {
  __typename: "CostOfLivingRanking",
  cityCountry: string,
  grossRentalYieldOutsideOfCentre: number,
  priceToRentRatioOutsideOfCentre: number,
  housePriceToIncomeRatio: number,
  affordabilityIndex: number,
  mortgageAsPercentageOfIncome: number,
  priceToRentRatioCityCentre: number,
  grossRentalYieldCityCentre: number,
  cityPrice?: CityPrice | null,
  createdAt: string,
  updatedAt: string,
};

export type CityPrice = {
  __typename: "CityPrice",
  cityCountry: string,
  city?: string | null,
  country?: string | null,
  prices?:  Array<Price | null > | null,
  usdPrices?:  Array<UsdPrice | null > | null,
  currency?: string | null,
  contributors12Months?: number | null,
  monthLastUpdate?: number | null,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  images?:  Array<ImageObject | null > | null,
  numbeoCityId?: number | null,
  costOfLivingRanking?: CostOfLivingRanking | null,
  FilterCombination?: FilterCombination | null,
  createdAt: string,
  updatedAt: string,
};

export type Price = {
  __typename: "Price",
  itemId?: number | null,
  itemName?: string | null,
  lowestPrice?: number | null,
  averagePrice?: number | null,
  highestPrice?: number | null,
  dataPoints?: number | null,
};

export type UsdPrice = {
  __typename: "UsdPrice",
  lowestPrice?: number | null,
  averagePrice?: number | null,
  highestPrice?: number | null,
  dataPoints?: number | null,
  itemName?: string | null,
  itemId?: number | null,
};

export type ImageObject = {
  __typename: "ImageObject",
  unsplashId?: string | null,
  description?: string | null,
  urls?: Urls | null,
  height?: number | null,
  width?: number | null,
  unsplashLikes?: number | null,
};

export type Urls = {
  __typename: "Urls",
  raw?: string | null,
  full?: string | null,
  regular?: string | null,
  small?: string | null,
  thumb?: string | null,
  smallS3?: string | null,
};

export type FilterCombination = {
  __typename: "FilterCombination",
  cityCountry: string,
  country?: string | null,
  singleWorkingMonthlyCost?: number | null,
  singleMiddleMonthlyCost?: number | null,
  singleHighValueMonthlyCost?: number | null,
  coupleWorkingMonthlyCost?: number | null,
  coupleMiddleMonthlyCost?: number | null,
  coupleHighValueMonthlyCost?: number | null,
  smallFamilyWorkingMonthlyCost?: number | null,
  smallFamilyMiddleMonthlyCost?: number | null,
  smallFamilyHighValueMonthlyCost?: number | null,
  largeFamilyWorkingMonthlyCost?: number | null,
  largeFamilyMiddleMonthlyCost?: number | null,
  largeFamilyHighValueMonthlyCost?: number | null,
  cityPrice?: CityPrice | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCostOfLivingRankingInput = {
  cityCountry: string,
  grossRentalYieldOutsideOfCentre?: number | null,
  priceToRentRatioOutsideOfCentre?: number | null,
  housePriceToIncomeRatio?: number | null,
  affordabilityIndex?: number | null,
  mortgageAsPercentageOfIncome?: number | null,
  priceToRentRatioCityCentre?: number | null,
  grossRentalYieldCityCentre?: number | null,
};

export type DeleteCostOfLivingRankingInput = {
  cityCountry: string,
};

export type CreateCityPriceInput = {
  cityCountry: string,
  city?: string | null,
  country?: string | null,
  prices?: Array< PriceInput | null > | null,
  usdPrices?: Array< UsdPriceInput | null > | null,
  currency?: string | null,
  contributors12Months?: number | null,
  monthLastUpdate?: number | null,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  images?: Array< ImageObjectInput | null > | null,
  numbeoCityId?: number | null,
};

export type PriceInput = {
  itemId?: number | null,
  itemName?: string | null,
  lowestPrice?: number | null,
  averagePrice?: number | null,
  highestPrice?: number | null,
  dataPoints?: number | null,
};

export type UsdPriceInput = {
  lowestPrice?: number | null,
  averagePrice?: number | null,
  highestPrice?: number | null,
  dataPoints?: number | null,
  itemName?: string | null,
  itemId?: number | null,
};

export type ImageObjectInput = {
  unsplashId?: string | null,
  description?: string | null,
  urls?: UrlsInput | null,
  height?: number | null,
  width?: number | null,
  unsplashLikes?: number | null,
};

export type UrlsInput = {
  raw?: string | null,
  full?: string | null,
  regular?: string | null,
  small?: string | null,
  thumb?: string | null,
  smallS3?: string | null,
};

export type ModelCityPriceConditionInput = {
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  contributors12Months?: ModelIntInput | null,
  monthLastUpdate?: ModelIntInput | null,
  contributors?: ModelIntInput | null,
  yearLastUpdate?: ModelIntInput | null,
  numbeoCityId?: ModelIntInput | null,
  and?: Array< ModelCityPriceConditionInput | null > | null,
  or?: Array< ModelCityPriceConditionInput | null > | null,
  not?: ModelCityPriceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCityPriceInput = {
  cityCountry: string,
  city?: string | null,
  country?: string | null,
  prices?: Array< PriceInput | null > | null,
  usdPrices?: Array< UsdPriceInput | null > | null,
  currency?: string | null,
  contributors12Months?: number | null,
  monthLastUpdate?: number | null,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  images?: Array< ImageObjectInput | null > | null,
  numbeoCityId?: number | null,
};

export type DeleteCityPriceInput = {
  cityCountry: string,
};

export type CreateFilterCombinationInput = {
  cityCountry: string,
  country?: string | null,
  singleWorkingMonthlyCost?: number | null,
  singleMiddleMonthlyCost?: number | null,
  singleHighValueMonthlyCost?: number | null,
  coupleWorkingMonthlyCost?: number | null,
  coupleMiddleMonthlyCost?: number | null,
  coupleHighValueMonthlyCost?: number | null,
  smallFamilyWorkingMonthlyCost?: number | null,
  smallFamilyMiddleMonthlyCost?: number | null,
  smallFamilyHighValueMonthlyCost?: number | null,
  largeFamilyWorkingMonthlyCost?: number | null,
  largeFamilyMiddleMonthlyCost?: number | null,
  largeFamilyHighValueMonthlyCost?: number | null,
};

export type ModelFilterCombinationConditionInput = {
  country?: ModelStringInput | null,
  singleWorkingMonthlyCost?: ModelIntInput | null,
  singleMiddleMonthlyCost?: ModelIntInput | null,
  singleHighValueMonthlyCost?: ModelIntInput | null,
  coupleWorkingMonthlyCost?: ModelIntInput | null,
  coupleMiddleMonthlyCost?: ModelIntInput | null,
  coupleHighValueMonthlyCost?: ModelIntInput | null,
  smallFamilyWorkingMonthlyCost?: ModelIntInput | null,
  smallFamilyMiddleMonthlyCost?: ModelIntInput | null,
  smallFamilyHighValueMonthlyCost?: ModelIntInput | null,
  largeFamilyWorkingMonthlyCost?: ModelIntInput | null,
  largeFamilyMiddleMonthlyCost?: ModelIntInput | null,
  largeFamilyHighValueMonthlyCost?: ModelIntInput | null,
  and?: Array< ModelFilterCombinationConditionInput | null > | null,
  or?: Array< ModelFilterCombinationConditionInput | null > | null,
  not?: ModelFilterCombinationConditionInput | null,
};

export type UpdateFilterCombinationInput = {
  cityCountry: string,
  country?: string | null,
  singleWorkingMonthlyCost?: number | null,
  singleMiddleMonthlyCost?: number | null,
  singleHighValueMonthlyCost?: number | null,
  coupleWorkingMonthlyCost?: number | null,
  coupleMiddleMonthlyCost?: number | null,
  coupleHighValueMonthlyCost?: number | null,
  smallFamilyWorkingMonthlyCost?: number | null,
  smallFamilyMiddleMonthlyCost?: number | null,
  smallFamilyHighValueMonthlyCost?: number | null,
  largeFamilyWorkingMonthlyCost?: number | null,
  largeFamilyMiddleMonthlyCost?: number | null,
  largeFamilyHighValueMonthlyCost?: number | null,
};

export type DeleteFilterCombinationInput = {
  cityCountry: string,
};

export type ModelCostOfLivingRankingFilterInput = {
  cityCountry?: ModelStringInput | null,
  grossRentalYieldOutsideOfCentre?: ModelFloatInput | null,
  priceToRentRatioOutsideOfCentre?: ModelFloatInput | null,
  housePriceToIncomeRatio?: ModelFloatInput | null,
  affordabilityIndex?: ModelFloatInput | null,
  mortgageAsPercentageOfIncome?: ModelFloatInput | null,
  priceToRentRatioCityCentre?: ModelFloatInput | null,
  grossRentalYieldCityCentre?: ModelFloatInput | null,
  and?: Array< ModelCostOfLivingRankingFilterInput | null > | null,
  or?: Array< ModelCostOfLivingRankingFilterInput | null > | null,
  not?: ModelCostOfLivingRankingFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCostOfLivingRankingConnection = {
  __typename: "ModelCostOfLivingRankingConnection",
  items:  Array<CostOfLivingRanking | null >,
  nextToken?: string | null,
};

export type ModelCityPriceFilterInput = {
  cityCountry?: ModelStringInput | null,
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  contributors12Months?: ModelIntInput | null,
  monthLastUpdate?: ModelIntInput | null,
  contributors?: ModelIntInput | null,
  yearLastUpdate?: ModelIntInput | null,
  numbeoCityId?: ModelIntInput | null,
  and?: Array< ModelCityPriceFilterInput | null > | null,
  or?: Array< ModelCityPriceFilterInput | null > | null,
  not?: ModelCityPriceFilterInput | null,
};

export type ModelCityPriceConnection = {
  __typename: "ModelCityPriceConnection",
  items:  Array<CityPrice | null >,
  nextToken?: string | null,
};

export type ModelFilterCombinationFilterInput = {
  cityCountry?: ModelStringInput | null,
  country?: ModelStringInput | null,
  singleWorkingMonthlyCost?: ModelIntInput | null,
  singleMiddleMonthlyCost?: ModelIntInput | null,
  singleHighValueMonthlyCost?: ModelIntInput | null,
  coupleWorkingMonthlyCost?: ModelIntInput | null,
  coupleMiddleMonthlyCost?: ModelIntInput | null,
  coupleHighValueMonthlyCost?: ModelIntInput | null,
  smallFamilyWorkingMonthlyCost?: ModelIntInput | null,
  smallFamilyMiddleMonthlyCost?: ModelIntInput | null,
  smallFamilyHighValueMonthlyCost?: ModelIntInput | null,
  largeFamilyWorkingMonthlyCost?: ModelIntInput | null,
  largeFamilyMiddleMonthlyCost?: ModelIntInput | null,
  largeFamilyHighValueMonthlyCost?: ModelIntInput | null,
  and?: Array< ModelFilterCombinationFilterInput | null > | null,
  or?: Array< ModelFilterCombinationFilterInput | null > | null,
  not?: ModelFilterCombinationFilterInput | null,
};

export type ModelFilterCombinationConnection = {
  __typename: "ModelFilterCombinationConnection",
  items:  Array<FilterCombination | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCostOfLivingRankingFilterInput = {
  cityCountry?: ModelSubscriptionStringInput | null,
  grossRentalYieldOutsideOfCentre?: ModelSubscriptionFloatInput | null,
  priceToRentRatioOutsideOfCentre?: ModelSubscriptionFloatInput | null,
  housePriceToIncomeRatio?: ModelSubscriptionFloatInput | null,
  affordabilityIndex?: ModelSubscriptionFloatInput | null,
  mortgageAsPercentageOfIncome?: ModelSubscriptionFloatInput | null,
  priceToRentRatioCityCentre?: ModelSubscriptionFloatInput | null,
  grossRentalYieldCityCentre?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionCostOfLivingRankingFilterInput | null > | null,
  or?: Array< ModelSubscriptionCostOfLivingRankingFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCityPriceFilterInput = {
  cityCountry?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  contributors12Months?: ModelSubscriptionIntInput | null,
  monthLastUpdate?: ModelSubscriptionIntInput | null,
  contributors?: ModelSubscriptionIntInput | null,
  yearLastUpdate?: ModelSubscriptionIntInput | null,
  numbeoCityId?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCityPriceFilterInput | null > | null,
  or?: Array< ModelSubscriptionCityPriceFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFilterCombinationFilterInput = {
  cityCountry?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  singleWorkingMonthlyCost?: ModelSubscriptionIntInput | null,
  singleMiddleMonthlyCost?: ModelSubscriptionIntInput | null,
  singleHighValueMonthlyCost?: ModelSubscriptionIntInput | null,
  coupleWorkingMonthlyCost?: ModelSubscriptionIntInput | null,
  coupleMiddleMonthlyCost?: ModelSubscriptionIntInput | null,
  coupleHighValueMonthlyCost?: ModelSubscriptionIntInput | null,
  smallFamilyWorkingMonthlyCost?: ModelSubscriptionIntInput | null,
  smallFamilyMiddleMonthlyCost?: ModelSubscriptionIntInput | null,
  smallFamilyHighValueMonthlyCost?: ModelSubscriptionIntInput | null,
  largeFamilyWorkingMonthlyCost?: ModelSubscriptionIntInput | null,
  largeFamilyMiddleMonthlyCost?: ModelSubscriptionIntInput | null,
  largeFamilyHighValueMonthlyCost?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionFilterCombinationFilterInput | null > | null,
  or?: Array< ModelSubscriptionFilterCombinationFilterInput | null > | null,
};

export type CreateCostOfLivingRankingMutationVariables = {
  input: CreateCostOfLivingRankingInput,
  condition?: ModelCostOfLivingRankingConditionInput | null,
};

export type CreateCostOfLivingRankingMutation = {
  createCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCostOfLivingRankingMutationVariables = {
  input: UpdateCostOfLivingRankingInput,
  condition?: ModelCostOfLivingRankingConditionInput | null,
};

export type UpdateCostOfLivingRankingMutation = {
  updateCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCostOfLivingRankingMutationVariables = {
  input: DeleteCostOfLivingRankingInput,
  condition?: ModelCostOfLivingRankingConditionInput | null,
};

export type DeleteCostOfLivingRankingMutation = {
  deleteCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCityPriceMutationVariables = {
  input: CreateCityPriceInput,
  condition?: ModelCityPriceConditionInput | null,
};

export type CreateCityPriceMutation = {
  createCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCityPriceMutationVariables = {
  input: UpdateCityPriceInput,
  condition?: ModelCityPriceConditionInput | null,
};

export type UpdateCityPriceMutation = {
  updateCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCityPriceMutationVariables = {
  input: DeleteCityPriceInput,
  condition?: ModelCityPriceConditionInput | null,
};

export type DeleteCityPriceMutation = {
  deleteCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFilterCombinationMutationVariables = {
  input: CreateFilterCombinationInput,
  condition?: ModelFilterCombinationConditionInput | null,
};

export type CreateFilterCombinationMutation = {
  createFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFilterCombinationMutationVariables = {
  input: UpdateFilterCombinationInput,
  condition?: ModelFilterCombinationConditionInput | null,
};

export type UpdateFilterCombinationMutation = {
  updateFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFilterCombinationMutationVariables = {
  input: DeleteFilterCombinationInput,
  condition?: ModelFilterCombinationConditionInput | null,
};

export type DeleteFilterCombinationMutation = {
  deleteFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCostOfLivingRankingQueryVariables = {
  cityCountry: string,
};

export type GetCostOfLivingRankingQuery = {
  getCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCostOfLivingRankingsQueryVariables = {
  cityCountry?: string | null,
  filter?: ModelCostOfLivingRankingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCostOfLivingRankingsQuery = {
  listCostOfLivingRankings?:  {
    __typename: "ModelCostOfLivingRankingConnection",
    items:  Array< {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCityPriceQueryVariables = {
  cityCountry: string,
};

export type GetCityPriceQuery = {
  getCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCityPricesQueryVariables = {
  cityCountry?: string | null,
  filter?: ModelCityPriceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListCityPricesQuery = {
  listCityPrices?:  {
    __typename: "ModelCityPriceConnection",
    items:  Array< {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFilterCombinationQueryVariables = {
  cityCountry: string,
};

export type GetFilterCombinationQuery = {
  getFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFilterCombinationsQueryVariables = {
  cityCountry?: string | null,
  filter?: ModelFilterCombinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListFilterCombinationsQuery = {
  listFilterCombinations?:  {
    __typename: "ModelFilterCombinationConnection",
    items:  Array< {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FilterCombinationsByCountryQueryVariables = {
  country: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFilterCombinationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FilterCombinationsByCountryQuery = {
  filterCombinationsByCountry?:  {
    __typename: "ModelFilterCombinationConnection",
    items:  Array< {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCostOfLivingRankingSubscriptionVariables = {
  filter?: ModelSubscriptionCostOfLivingRankingFilterInput | null,
};

export type OnCreateCostOfLivingRankingSubscription = {
  onCreateCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCostOfLivingRankingSubscriptionVariables = {
  filter?: ModelSubscriptionCostOfLivingRankingFilterInput | null,
};

export type OnUpdateCostOfLivingRankingSubscription = {
  onUpdateCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCostOfLivingRankingSubscriptionVariables = {
  filter?: ModelSubscriptionCostOfLivingRankingFilterInput | null,
};

export type OnDeleteCostOfLivingRankingSubscription = {
  onDeleteCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    cityCountry: string,
    grossRentalYieldOutsideOfCentre: number,
    priceToRentRatioOutsideOfCentre: number,
    housePriceToIncomeRatio: number,
    affordabilityIndex: number,
    mortgageAsPercentageOfIncome: number,
    priceToRentRatioCityCentre: number,
    grossRentalYieldCityCentre: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCityPriceSubscriptionVariables = {
  filter?: ModelSubscriptionCityPriceFilterInput | null,
};

export type OnCreateCityPriceSubscription = {
  onCreateCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCityPriceSubscriptionVariables = {
  filter?: ModelSubscriptionCityPriceFilterInput | null,
};

export type OnUpdateCityPriceSubscription = {
  onUpdateCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCityPriceSubscriptionVariables = {
  filter?: ModelSubscriptionCityPriceFilterInput | null,
};

export type OnDeleteCityPriceSubscription = {
  onDeleteCityPrice?:  {
    __typename: "CityPrice",
    cityCountry: string,
    city?: string | null,
    country?: string | null,
    prices?:  Array< {
      __typename: "Price",
      itemId?: number | null,
      itemName?: string | null,
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
    } | null > | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowestPrice?: number | null,
      averagePrice?: number | null,
      highestPrice?: number | null,
      dataPoints?: number | null,
      itemName?: string | null,
      itemId?: number | null,
    } | null > | null,
    currency?: string | null,
    contributors12Months?: number | null,
    monthLastUpdate?: number | null,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    images?:  Array< {
      __typename: "ImageObject",
      unsplashId?: string | null,
      description?: string | null,
      height?: number | null,
      width?: number | null,
      unsplashLikes?: number | null,
    } | null > | null,
    numbeoCityId?: number | null,
    costOfLivingRanking?:  {
      __typename: "CostOfLivingRanking",
      cityCountry: string,
      grossRentalYieldOutsideOfCentre: number,
      priceToRentRatioOutsideOfCentre: number,
      housePriceToIncomeRatio: number,
      affordabilityIndex: number,
      mortgageAsPercentageOfIncome: number,
      priceToRentRatioCityCentre: number,
      grossRentalYieldCityCentre: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    FilterCombination?:  {
      __typename: "FilterCombination",
      cityCountry: string,
      country?: string | null,
      singleWorkingMonthlyCost?: number | null,
      singleMiddleMonthlyCost?: number | null,
      singleHighValueMonthlyCost?: number | null,
      coupleWorkingMonthlyCost?: number | null,
      coupleMiddleMonthlyCost?: number | null,
      coupleHighValueMonthlyCost?: number | null,
      smallFamilyWorkingMonthlyCost?: number | null,
      smallFamilyMiddleMonthlyCost?: number | null,
      smallFamilyHighValueMonthlyCost?: number | null,
      largeFamilyWorkingMonthlyCost?: number | null,
      largeFamilyMiddleMonthlyCost?: number | null,
      largeFamilyHighValueMonthlyCost?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFilterCombinationSubscriptionVariables = {
  filter?: ModelSubscriptionFilterCombinationFilterInput | null,
};

export type OnCreateFilterCombinationSubscription = {
  onCreateFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFilterCombinationSubscriptionVariables = {
  filter?: ModelSubscriptionFilterCombinationFilterInput | null,
};

export type OnUpdateFilterCombinationSubscription = {
  onUpdateFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFilterCombinationSubscriptionVariables = {
  filter?: ModelSubscriptionFilterCombinationFilterInput | null,
};

export type OnDeleteFilterCombinationSubscription = {
  onDeleteFilterCombination?:  {
    __typename: "FilterCombination",
    cityCountry: string,
    country?: string | null,
    singleWorkingMonthlyCost?: number | null,
    singleMiddleMonthlyCost?: number | null,
    singleHighValueMonthlyCost?: number | null,
    coupleWorkingMonthlyCost?: number | null,
    coupleMiddleMonthlyCost?: number | null,
    coupleHighValueMonthlyCost?: number | null,
    smallFamilyWorkingMonthlyCost?: number | null,
    smallFamilyMiddleMonthlyCost?: number | null,
    smallFamilyHighValueMonthlyCost?: number | null,
    largeFamilyWorkingMonthlyCost?: number | null,
    largeFamilyMiddleMonthlyCost?: number | null,
    largeFamilyHighValueMonthlyCost?: number | null,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      currency?: string | null,
      contributors12Months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      numbeoCityId?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
