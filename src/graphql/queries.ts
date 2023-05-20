/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCostOfLivingRanking = /* GraphQL */ `
  query GetCostOfLivingRanking($city: String!) {
    getCostOfLivingRanking(city: $city) {
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
export const listCostOfLivingRankings = /* GraphQL */ `
  query ListCostOfLivingRankings(
    $city: String
    $filter: ModelCostOfLivingRankingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCostOfLivingRankings(
      city: $city
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCityPrice = /* GraphQL */ `
  query GetCityPrice($cityCountry: String!) {
    getCityPrice(cityCountry: $cityCountry) {
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
export const listCityPrices = /* GraphQL */ `
  query ListCityPrices(
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
      nextToken
    }
  }
`;
