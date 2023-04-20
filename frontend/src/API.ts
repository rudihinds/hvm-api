/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CitiesPriceInput = {
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

export type CitiesPrice = {
  __typename: "CitiesPrice",
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

export type CreateCitiesPriceMutationVariables = {
  input: CitiesPriceInput,
};

export type CreateCitiesPriceMutation = {
  createCitiesPrice?:  {
    __typename: "CitiesPrice",
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
  } | null,
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
  } | null,
};

export type ListCostOfLivingRankingsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCostOfLivingRankingsQuery = {
  listCostOfLivingRankings?:  Array< {
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
  } | null > | null,
};

export type GetCitiesPriceQueryVariables = {
  cityCountry: string,
};

export type GetCitiesPriceQuery = {
  getCitiesPrice?:  {
    __typename: "CitiesPrice",
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
