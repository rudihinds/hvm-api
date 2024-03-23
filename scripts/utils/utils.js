const getCitiesThatHaveAllPricingData = (cityData, length = 52) =>
  cityData.filter((city) => city.prices.length > length);

module.exports = {
    getCitiesThatHaveAllPricingData
}