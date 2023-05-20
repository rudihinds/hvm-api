// import citiesfromdbwithoutimages from './citiesfromdbwithoutimages.json';
// loop cities
// for each city get image from unsplash
// if fails push cityname to array
// if succeeds update city in db with image urls (first check the shape of the data that comes back from unsplash)
// make count of successes and fails and log at end of script
require = require("esm")(module);
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { updateCityPrice } = require("../../src/graphql/mutations.ts");
const { getCityPrice } = require("../../src/graphql/queries.ts");
const { API, graphqlOperation } = require("aws-amplify");
const { log } = require("console");
const { Amplify } = require("aws-amplify");
require("dotenv").config();
const unsplashClientId = process.env.UNSPLASH_CLIENT_ID;

const jsonFilePath = path.resolve(
  __dirname,
  "..",
  "..",
  "citiesFromDbWithNoImages.json"
);

const cities = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

const getCityImages = async (city) => {
  const res = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${unsplashClientId}&query=${city}`,
    { headers: { "Content-Type": "application/json" } }
  );

  const cityImages = res.data.results.slice(0, 10).map((image) => {
    let cityImage = {
      unsplashId: image.id,
      description: image.description,
      urls: image.urls,
      height: image.height,
      width: image.width,
      unsplashLikes: image.likes,
    };
    return cityImage;
  });
  return cityImages;
};

Amplify.configure({
  aws_appsync_graphqlEndpoint: "http://192.168.0.17:20002/graphql",
  aws_appsync_region: "eu-west-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: "da2-fakeApiId123456",
});

const getCityFromDynamoDB = async (cityCountry) => {
  try {
    const result = await Amplify.API.graphql({
      query: getCityPrice,
      variables: { cityCountry },
    });
    return result.data.getCityPrice;
  } catch (error) {
    console.error("error in getting json city from dynamodb", error);
  }
};

const updateCityImages = async () => {
  for (const city of cities) {
    // we need to update each city record in dynamodb with the image urls
    // however we need to check if the city already has images
    // we also need to preserve the rest of the city data in the cityprice table

    //get record from dynamodb using citycountry (based on citiesfromdbwithoutimages.json)
    const cityCountry = city.city + ", " + city.country;
    const cityFromDynamoDB = await getCityFromDynamoDB(cityCountry);

    // get images for city from unsplash
    // update city record in dynamodb with image urls
    const cityImages = await getCityImages(city.city);
    const input = {
      ...cityFromDynamoDB,
      images: cityImages,
    };
    try {
      const result = await Amplify.API.graphql({
        query: updateCityPrice,
        variables: {
          input,
        },
      });
      console.log(result.data.updateCityPrice);
    } catch (error) {
      console.error("error in updating city with images", error);
    }
  }
};

updateCityImages();

// chatgpt code below for request limiting

// const delay = (interval) =>
//   new Promise((resolve) => setTimeout(resolve, interval));

// const MAX_REQUESTS = 50; // maximum requests per interval
// const INTERVAL = 61 * 60 * 1000; // 61 minutes in milliseconds

// let requestCount = 0; // counter for the number of requests made

// const updateCityImages = async () => {
//   for (const [i, city] of cities.entries()) {
//     if (requestCount >= MAX_REQUESTS) {
//       console.log(
//         `Reached limit of ${MAX_REQUESTS} requests. Waiting for ${
//           INTERVAL / 60 / 1000
//         } minutes.`
//       );
//       await delay(INTERVAL);
//       requestCount = 0; // reset the request count
//     }

//     // Add your existing code here...

//     // get images for city from unsplash
//     // update city record in dynamodb with image urls
//     const cityImages = await getCityImages(city.city);
//     requestCount++; // increment the request count

//     const input = {
//       ...cityFromDynamoDB,
//       images: cityImages,
//     };
//     try {
//       const result = await Amplify.API.graphql({
//         query: updateCityPrice,
//         variables: {
//           input,
//         },
//       });
//       console.log(result.data.updateCityPrice);
//     } catch (error) {
//       console.error("error in updating city with images", error);
//     }
//   }
// };

// updateCityImages();

