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
const { updateCityPrice } = require("../../src/graphql/mutations.ts");

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
      nextToken = result.data.listCityPrices.nextToken;
      console.log("nextToken from result", nextToken);
      cityPricesFromDb = [
        ...cityPricesFromDb,
        ...result.data.listCityPrices.items,
      ];
      console.log("len", cityPricesFromDb.length);

      count += 1;
      // console.log(JSON.stringify(cityPricesFromDb));
      // console.log(count);
      // if (count === 10) {
      //   nextToken = null;
      // }
    } catch (error) {
      console.error("Error getting items list", JSON.stringify(error, null, 2));
    }
  } while (nextToken);

  let citiesFromDbWithNoImages = [];
  let citiesFromDbWithImages = [];
  for (const cityPrice of cityPricesFromDb) {
    console.log(cityPrice);
    console.log(`inside loop for ${cityPrice.city}`);
    const cityImageObj = cityImageObjsFromJson.find(
      (cityImageObj) =>
        cityImageObj.city?.trim().toLowerCase() ===
        cityPrice.city?.trim().toLowerCase()
    );
    if (cityImageObj) {
      console.log("image found for ", cityPrice.city);
      const input = {
        ...cityPrice,
        images: cityImageObj.images,
      };
      try {
        const result = await Amplify.API.graphql({
          query: updateCityPrice,
          variables: { input },
        });
        citiesFromDbWithImages = [
          ...citiesFromDbWithImages,
          {
            city: result.data.updateCityPrice.city,
            country: result.data.updateCityPrice.country,
          },
        ];
        console.log(
          "result from updateCityPrice with images",
          result.data.updateCityPrice
        );
      } catch (err) {
        console.error("error updating cityPrice with images", err);
      }
    } else {
      console.log("no image found for city", cityPrice.city);
      citiesFromDbWithNoImages = [
        ...citiesFromDbWithNoImages,
        {
          city: cityPrice.city,
          country: cityPrice.country,
        },
      ];
    }
  }
  console.log("number cities with images now: ", citiesFromDbWithImages.length);
  console.log(
    "number cities with no images now: ",
    citiesFromDbWithNoImages.length
  );

  citiesFromDbWithNoImages.length &&
    fs.writeFile(
      "citiesFromDbWithNoImages.json",
      JSON.stringify(citiesFromDbWithNoImages, null, 2),
      (err) => {
        if (err) {
          console.log("citiesFromDbWithNoImages.json couldnt be written");
          console.log(err);
        }
      }
    );

  citiesFromDbWithImages.length &&
    fs.writeFile(
      "citiesFromDbWithImages.json",
      JSON.stringify(citiesFromDbWithImages, null, 2),
      (err) => {
        if (err) {
          console.log("citiesFromDbWithImages.json couldnt be written");
          console.log(err);
        }
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
