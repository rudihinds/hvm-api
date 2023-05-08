// use readfile on json with image urls for each city to create a new array of javascript objects
// read each item in the cityPrices table
// for each item, check if the city name exists in the new array, this means there is an image url for it
// create counts for how many items have images and how many don't
// create a new array for the cities that have missing urls and write to a new json of cities with missing images
// write new function to fetch images for missing cities and update the json
// finally write a function to update the cityPrices table with the new image urls

require = require("esm")(module);
const { Amplify } = require("aws-amplify");
const fs = require("fs");
const path = require("path");
const { listCityPrices } = require("../../src/graphql/queries.ts");
const updateCityPrice = require("../../src/graphql/mutations.ts")

const url = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "sampleCityWithImages.json"
);

const updateCityPrices = async (cityImageObjsFromJson) => {
  let cityPricesFromDb = [];
  let nextToken = null;
  let count = 0;
  do {
    try {
      const result = await Amplify.API.graphql({
        query: listCityPrices,
        variables: { limit: 1000, nextToken },
      });
      console.log(
        "nextToken from result",
        result.data.listCityPrices.nextToken
      );
      nextToken = result.data.listCityPrices.nextToken;
      cityPricesFromDb = [
        ...cityPricesFromDb,
        ...result.data.listCityPrices.items,
      ];
      count += 1;
      console.log(cityPricesFromDb.length);
      if (count === 3) {
        nextToken = null;
      }
    } catch (error) {
      console.error("Error getting items list", JSON.stringify(error, null, 2));
    }
  } while (nextToken);

  let citiesFromDbWithNoImages = [];
  for (const cityPrice of cityPricesFromDb) {
    console.log('inside loop');
    const cityImageObj = cityImageObjsFromJson.find(
      (cityImageObj) => cityImageObj.city === cityPrice.city
    );
    if (cityImageObj) {
      const input = {
        ...cityPrice,
        images: cityImageObj.images,
      };
      try {
        const result = await Amplify.API.graphql({
          query: updateCityPrice,
          variables: { input },
        });
        console.log("result from updateCityPrice with images", result);
      } catch (err) {
        console.error("error updating cityPrice with images", err.message);
      }
    } else {
        console.log('no image found for city', cityPrice.city);
      citiesFromDbWithNoImages.push(cityPrice);
    }
  }

  citiesFromDbWithNoImages.length &&
    fs.writeFile(
      "citiesFromDbWithNoImages.json",
      JSON.stringify(citiesFromDbWithNoImages, null, 2),
      (err) => {
        if (err) throw err;
        console.log("citiesFromDbWithNoImages.json written");
      }
    );
};

fs.readFile(url, (err, data) => {
  if (err) throw err;
  const cities = JSON.parse(data);
  /** {
  city: 'Zhangjiagang',
  images: [
    {
      unsplashId: 'U4E_56v4MVQ',
      name: 'Zhangjiagang',
      city: 'Zhangjiagang',
      description: null,
      alt_description: 'aerial photography of city',
      urls: [Object]
    },
    {
      unsplashId: 'P5CRjAxt_Qo',
      name: 'Zhangjiagang',
      city: 'Zhangjiagang',
      description: 'Building',
      alt_description: 'city buildings under blue sky during daytime',
      urls: [Object]
    }, 
    */

  Amplify.configure({
    aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
    aws_appsync_region: "eu-west-1",
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: "da2-fakeApiId123456",
  });

  updateCityPrices(cities);
});
