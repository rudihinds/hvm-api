/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

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
  createdAt: string,
  updatedAt: string,
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
  country?: string | null,
  numbeoCityId?: number | null,
  city?: string | null,
  usdPrices?: Array< UsdPriceInput | null > | null,
  currency?: string | null,
  contributors12months?: number | null,
  monthLastUpdate?: number | null,
  cityCountry: string,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  prices?: Array< PriceInput | null > | null,
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

export type ModelCityPriceConditionInput = {
  country?: ModelStringInput | null,
  numbeoCityId?: ModelIntInput | null,
  city?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  contributors12months?: ModelIntInput | null,
  monthLastUpdate?: ModelIntInput | null,
  contributors?: ModelIntInput | null,
  yearLastUpdate?: ModelIntInput | null,
  and?: Array< ModelCityPriceConditionInput | null > | null,
  or?: Array< ModelCityPriceConditionInput | null > | null,
  not?: ModelCityPriceConditionInput | null,
};

export type CityPrice = {
  __typename: "CityPrice",
  country?: string | null,
  numbeoCityId?: number | null,
  city?: string | null,
  usdPrices?:  Array<UsdPrice | null > | null,
  currency?: string | null,
  contributors12months?: number | null,
  monthLastUpdate?: number | null,
  cityCountry: string,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  prices?:  Array<Price | null > | null,
  createdAt: string,
  updatedAt: string,
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
  lowest_price?: number | null,
  average_price?: number | null,
  highest_price?: number | null,
  data_points?: number | null,
  item_name?: string | null,
  item_id?: number | null,
};

export type UpdateCityPriceInput = {
  country?: string | null,
  numbeoCityId?: number | null,
  city?: string | null,
  usdPrices?: Array< UsdPriceInput | null > | null,
  currency?: string | null,
  contributors12months?: number | null,
  monthLastUpdate?: number | null,
  cityCountry: string,
  contributors?: number | null,
  yearLastUpdate?: number | null,
  prices?: Array< PriceInput | null > | null,
};

export type DeleteCityPriceInput = {
  cityCountry: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
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

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
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
  country?: ModelStringInput | null,
  numbeoCityId?: ModelIntInput | null,
  city?: ModelStringInput | null,
  currency?: ModelStringInput | null,
  contributors12months?: ModelIntInput | null,
  monthLastUpdate?: ModelIntInput | null,
  cityCountry?: ModelStringInput | null,
  contributors?: ModelIntInput | null,
  yearLastUpdate?: ModelIntInput | null,
  and?: Array< ModelCityPriceFilterInput | null > | null,
  or?: Array< ModelCityPriceFilterInput | null > | null,
  not?: ModelCityPriceFilterInput | null,
};

export type ModelCityPriceConnection = {
  __typename: "ModelCityPriceConnection",
  items:  Array<CityPrice | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  country?: ModelSubscriptionStringInput | null,
  numbeoCityId?: ModelSubscriptionIntInput | null,
  city?: ModelSubscriptionStringInput | null,
  currency?: ModelSubscriptionStringInput | null,
  contributors12months?: ModelSubscriptionIntInput | null,
  monthLastUpdate?: ModelSubscriptionIntInput | null,
  cityCountry?: ModelSubscriptionStringInput | null,
  contributors?: ModelSubscriptionIntInput | null,
  yearLastUpdate?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCityPriceFilterInput | null > | null,
  or?: Array< ModelSubscriptionCityPriceFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
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
      country?: string | null,
      numbeoCityId?: number | null,
      city?: string | null,
      currency?: string | null,
      contributors12months?: number | null,
      monthLastUpdate?: number | null,
      cityCountry: string,
      contributors?: number | null,
      yearLastUpdate?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
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
    country?: string | null,
    numbeoCityId?: number | null,
    city?: string | null,
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
    contributors12months?: number | null,
    monthLastUpdate?: number | null,
    cityCountry: string,
    contributors?: number | null,
    yearLastUpdate?: number | null,
    prices?:  Array< {
      __typename: "Price",
      lowest_price?: number | null,
      average_price?: number | null,
      highest_price?: number | null,
      data_points?: number | null,
      item_name?: string | null,
      item_id?: number | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
