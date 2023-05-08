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

const url = path.resolve(
  __dirname,
  "..",
  "..",
  "data",
  "sampleCityWithImages.json"
);

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

  const updateCityPrices = async (cityPrices) => {
    try {
      const result = await Amplify.API.graphql({
        query: listCityPrices,
        variables: { input: {} },
      });
      console.log("length", result.data.listCityPrices.items.length);
      throw Error("stop");
      console.log("result.data", JSON.stringify(result.data, null, 2));
    } catch (error) {
      console.error("Error getting items list", JSON.stringify(error, null, 2));
    }
  };

    updateCityPrices(cities);
});
