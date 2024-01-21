/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCostOfLivingRankingInput = {
  city: string,
  city_name: string,
  cityCountry: string,
  country: string,
  gross_rental_yield_outside_of_centre: number,
  price_to_rent_ratio_outside_of_centre: number,
  house_price_to_income_ratio: number,
  affordability_index: number,
  mortgage_as_percentage_of_income: number,
  price_to_rent_ratio_city_centre: number,
  gross_rental_yield_city_centre: number,
  city_id: number,
};

export type ModelCostOfLivingRankingConditionInput = {
  city_name?: ModelStringInput | null,
  cityCountry?: ModelStringInput | null,
  country?: ModelStringInput | null,
  gross_rental_yield_outside_of_centre?: ModelFloatInput | null,
  price_to_rent_ratio_outside_of_centre?: ModelFloatInput | null,
  house_price_to_income_ratio?: ModelFloatInput | null,
  affordability_index?: ModelFloatInput | null,
  mortgage_as_percentage_of_income?: ModelFloatInput | null,
  price_to_rent_ratio_city_centre?: ModelFloatInput | null,
  gross_rental_yield_city_centre?: ModelFloatInput | null,
  city_id?: ModelIntInput | null,
  and?: Array< ModelCostOfLivingRankingConditionInput | null > | null,
  or?: Array< ModelCostOfLivingRankingConditionInput | null > | null,
  not?: ModelCostOfLivingRankingConditionInput | null,
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


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
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

export type CostOfLivingRanking = {
  __typename: "CostOfLivingRanking",
  city: string,
  city_name: string,
  cityCountry: string,
  country: string,
  gross_rental_yield_outside_of_centre: number,
  price_to_rent_ratio_outside_of_centre: number,
  house_price_to_income_ratio: number,
  affordability_index: number,
  mortgage_as_percentage_of_income: number,
  price_to_rent_ratio_city_centre: number,
  gross_rental_yield_city_centre: number,
  city_id: number,
  cityPrice?: CityPrice | null,
  createdAt: string,
  updatedAt: string,
};

export type CityPrice = {
  __typename: "CityPrice",
  cityCountry: string,
  city?: string | null,
  country?: string | null,
  numbeoCityId?: number | null,
  usdPrices?:  Array<UsdPrice | null > | null,
  currency?: string | null,
  prices?:  Array<Price | null > | null,
  contributors12months?: number | null,
  monthLastUpdate?: number | null,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  images?:  Array<ImageObject | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UsdPrice = {
  __typename: "UsdPrice",
  lowest_price?: number | null,
  average_price?: number | null,
  highest_price?: number | null,
  data_points?: number | null,
  item_name?: string | null,
  item_id?: number | null,
};

export type Price = {
  __typename: "Price",
  item_id?: number | null,
  item_name?: string | null,
  lowest_price?: number | null,
  average_price?: number | null,
  highest_price?: number | null,
  data_points?: number | null,
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
  small_s3?: string | null,
};

export type UpdateCostOfLivingRankingInput = {
  city: string,
  city_name?: string | null,
  cityCountry?: string | null,
  country?: string | null,
  gross_rental_yield_outside_of_centre?: number | null,
  price_to_rent_ratio_outside_of_centre?: number | null,
  house_price_to_income_ratio?: number | null,
  affordability_index?: number | null,
  mortgage_as_percentage_of_income?: number | null,
  price_to_rent_ratio_city_centre?: number | null,
  gross_rental_yield_city_centre?: number | null,
  city_id?: number | null,
};

export type DeleteCostOfLivingRankingInput = {
  city: string,
};

export type CreateCityPriceInput = {
  cityCountry: string,
  city?: string | null,
  country?: string | null,
  numbeoCityId?: number | null,
  usdPrices?: Array< UsdPriceInput | null > | null,
  currency?: string | null,
  prices?: Array< PriceInput | null > | null,
  contributors12months?: number | null,
  monthLastUpdate?: number | null,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  images?: Array< ImageObjectInput | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UsdPriceInput = {
  lowest_price?: number | null,
  average_price?: number | null,
  highest_price?: number | null,
  data_points?: number | null,
  item_name?: string | null,
  item_id?: number | null,
};

export type PriceInput = {
  lowest_price?: number | null,
  average_price?: number | null,
  highest_price?: number | null,
  data_points?: number | null,
  item_name?: string | null,
  item_id?: number | null,
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
  small_s3?: string | null,
};

export type ModelCityPriceConditionInput = {
  city?: ModelStringInput | null,
  country?: ModelStringInput | null,
  numbeoCityId?: ModelIntInput | null,
  currency?: ModelStringInput | null,
  contributors12months?: ModelIntInput | null,
  monthLastUpdate?: ModelIntInput | null,
  contributors?: ModelIntInput | null,
  yearLastUpdate?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCityPriceConditionInput | null > | null,
  or?: Array< ModelCityPriceConditionInput | null > | null,
  not?: ModelCityPriceConditionInput | null,
};

export type UpdateCityPriceInput = {
  cityCountry: string,
  city?: string | null,
  country?: string | null,
  numbeoCityId?: number | null,
  usdPrices?: Array< UsdPriceInput | null > | null,
  currency?: string | null,
  prices?: Array< PriceInput | null > | null,
  contributors12months?: number | null,
  monthLastUpdate?: number | null,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  images?: Array< ImageObjectInput | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCityPriceInput = {
  cityCountry: string,
};

export type ModelCostOfLivingRankingFilterInput = {
  city?: ModelStringInput | null,
  city_name?: ModelStringInput | null,
  cityCountry?: ModelStringInput | null,
  country?: ModelStringInput | null,
  gross_rental_yield_outside_of_centre?: ModelFloatInput | null,
  price_to_rent_ratio_outside_of_centre?: ModelFloatInput | null,
  house_price_to_income_ratio?: ModelFloatInput | null,
  affordability_index?: ModelFloatInput | null,
  mortgage_as_percentage_of_income?: ModelFloatInput | null,
  price_to_rent_ratio_city_centre?: ModelFloatInput | null,
  gross_rental_yield_city_centre?: ModelFloatInput | null,
  city_id?: ModelIntInput | null,
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
  numbeoCityId?: ModelIntInput | null,
  currency?: ModelStringInput | null,
  contributors12months?: ModelIntInput | null,
  monthLastUpdate?: ModelIntInput | null,
  contributors?: ModelIntInput | null,
  yearLastUpdate?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCityPriceFilterInput | null > | null,
  or?: Array< ModelCityPriceFilterInput | null > | null,
  not?: ModelCityPriceFilterInput | null,
};

export type ModelCityPriceConnection = {
  __typename: "ModelCityPriceConnection",
  items:  Array<CityPrice | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCostOfLivingRankingFilterInput = {
  city?: ModelSubscriptionStringInput | null,
  city_name?: ModelSubscriptionStringInput | null,
  cityCountry?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  gross_rental_yield_outside_of_centre?: ModelSubscriptionFloatInput | null,
  price_to_rent_ratio_outside_of_centre?: ModelSubscriptionFloatInput | null,
  house_price_to_income_ratio?: ModelSubscriptionFloatInput | null,
  affordability_index?: ModelSubscriptionFloatInput | null,
  mortgage_as_percentage_of_income?: ModelSubscriptionFloatInput | null,
  price_to_rent_ratio_city_centre?: ModelSubscriptionFloatInput | null,
  gross_rental_yield_city_centre?: ModelSubscriptionFloatInput | null,
  city_id?: ModelSubscriptionIntInput | null,
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

export type ModelSubscriptionCityPriceFilterInput = {
  cityCountry?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  numbeoCityId?: ModelSubscriptionIntInput | null,
  currency?: ModelSubscriptionStringInput | null,
  contributors12months?: ModelSubscriptionIntInput | null,
  monthLastUpdate?: ModelSubscriptionIntInput | null,
  contributors?: ModelSubscriptionIntInput | null,
  yearLastUpdate?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCityPriceFilterInput | null > | null,
  or?: Array< ModelSubscriptionCityPriceFilterInput | null > | null,
};

export type CreateCostOfLivingRankingMutationVariables = {
  input: CreateCostOfLivingRankingInput,
  condition?: ModelCostOfLivingRankingConditionInput | null,
};

export type CreateCostOfLivingRankingMutation = {
  createCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetCostOfLivingRankingQueryVariables = {
  city: string,
};

export type GetCostOfLivingRankingQuery = {
  getCostOfLivingRanking?:  {
    __typename: "CostOfLivingRanking",
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCostOfLivingRankingsQueryVariables = {
  city?: string | null,
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
      city: string,
      city_name: string,
      cityCountry: string,
      country: string,
      gross_rental_yield_outside_of_centre: number,
      price_to_rent_ratio_outside_of_centre: number,
      house_price_to_income_ratio: number,
      affordability_index: number,
      mortgage_as_percentage_of_income: number,
      price_to_rent_ratio_city_centre: number,
      gross_rental_yield_city_centre: number,
      city_id: number,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
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
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    city: string,
    city_name: string,
    cityCountry: string,
    country: string,
    gross_rental_yield_outside_of_centre: number,
    price_to_rent_ratio_outside_of_centre: number,
    house_price_to_income_ratio: number,
    affordability_index: number,
    mortgage_as_percentage_of_income: number,
    price_to_rent_ratio_city_centre: number,
    gross_rental_yield_city_centre: number,
    city_id: number,
    cityPrice?:  {
      __typename: "CityPrice",
      cityCountry: string,
      city?: string | null,
      country?: string | null,
      numbeoCityId?: number | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
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
    numbeoCityId?: number | null,
    usdPrices?:  Array< {
      __typename: "UsdPrice",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    currency?: string | null,
    prices?:  Array< {
      __typename: "Price",
      item_id?: number | null,
      item_name?: string | null,
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
    } | null > | null,
    contributors12months?: number | null,
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
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
