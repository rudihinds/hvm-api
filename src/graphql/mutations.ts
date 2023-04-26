/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
const createCostOfLivingRanking = /* GraphQL */ `
  mutation CreateCostOfLivingRanking(
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
        country
        numbeoCityId
        city
        currency
        contributors12months
        monthLastUpdate
        cityCountry
        contributors
        yearLastUpdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
const updateCostOfLivingRanking = /* GraphQL */ `
  mutation UpdateCostOfLivingRanking(
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
        country
        numbeoCityId
        city
        currency
        contributors12months
        monthLastUpdate
        cityCountry
        contributors
        yearLastUpdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
const deleteCostOfLivingRanking = /* GraphQL */ `
  mutation DeleteCostOfLivingRanking(
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
        country
        numbeoCityId
        city
        currency
        contributors12months
        monthLastUpdate
        cityCountry
        contributors
        yearLastUpdate
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
const createCityPrice = /* GraphQL */ `
  mutation CreateCityPrice(
    $input: CreateCityPriceInput!
    $condition: ModelCityPriceConditionInput
  ) {
    createCityPrice(input: $input, condition: $condition) {
      country
      numbeoCityId
      city
      usdPrices {
        lowest_price
        average_price
        highest_price
        data_points
        item_name
        item_id
      }
      currency
      contributors12months
      monthLastUpdate
      cityCountry
      contributors
      yearLastUpdate
      prices {
        lowest_price
        average_price
        highest_price
        data_points
        item_name
        item_id
      }
      createdAt
      updatedAt
    }
  }
`;
const updateCityPrice = /* GraphQL */ `
  mutation UpdateCityPrice(
    $input: UpdateCityPriceInput!
    $condition: ModelCityPriceConditionInput
  ) {
    updateCityPrice(input: $input, condition: $condition) {
      country
      numbeoCityId
      city
      usdPrices {
        lowest_price
        average_price
        highest_price
        data_points
        item_name
        item_id
      }
      currency
      contributors12months
      monthLastUpdate
      cityCountry
      contributors
      yearLastUpdate
      prices {
        lowest_price
        average_price
        highest_price
        data_points
        item_name
        item_id
      }
      createdAt
      updatedAt
    }
  }
`;
const deleteCityPrice = /* GraphQL */ `
  mutation DeleteCityPrice(
    $input: DeleteCityPriceInput!
    $condition: ModelCityPriceConditionInput
  ) {
    deleteCityPrice(input: $input, condition: $condition) {
      country
      numbeoCityId
      city
      usdPrices {
        lowest_price
        average_price
        highest_price
        data_points
        item_name
        item_id
      }
      currency
      contributors12months
      monthLastUpdate
      cityCountry
      contributors
      yearLastUpdate
      prices {
        lowest_price
        average_price
        highest_price
        data_points
        item_name
        item_id
      }
      createdAt
      updatedAt
    }
  }
`;

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  createCostOfLivingRanking,
  updateCostOfLivingRanking,
  deleteCostOfLivingRanking,
  createCityPrice,
  updateCityPrice,
  deleteCityPrice,
};
