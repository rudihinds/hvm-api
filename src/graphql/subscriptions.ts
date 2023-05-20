/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCostOfLivingRanking = /* GraphQL */ `
  subscription OnCreateCostOfLivingRanking(
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
export const onUpdateCostOfLivingRanking = /* GraphQL */ `
  subscription OnUpdateCostOfLivingRanking(
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
export const onDeleteCostOfLivingRanking = /* GraphQL */ `
  subscription OnDeleteCostOfLivingRanking(
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
export const onCreateCityPrice = /* GraphQL */ `
  subscription OnCreateCityPrice(
    $filter: ModelSubscriptionCityPriceFilterInput
  ) {
    onCreateCityPrice(filter: $filter) {
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
      images {
        unsplashId
        description
        height
        width
        unsplashLikes
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCityPrice = /* GraphQL */ `
  subscription OnUpdateCityPrice(
    $filter: ModelSubscriptionCityPriceFilterInput
  ) {
    onUpdateCityPrice(filter: $filter) {
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
      images {
        unsplashId
        description
        height
        width
        unsplashLikes
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCityPrice = /* GraphQL */ `
  subscription OnDeleteCityPrice(
    $filter: ModelSubscriptionCityPriceFilterInput
  ) {
    onDeleteCityPrice(filter: $filter) {
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
      images {
        unsplashId
        description
        height
        width
        unsplashLikes
      }
      createdAt
      updatedAt
    }
  }
`;
