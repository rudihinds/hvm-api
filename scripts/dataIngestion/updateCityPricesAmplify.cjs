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
const { updateCityPrice } = require("../../hvm-api/src/graphql/mutations.ts");
const { getCityPrice } = require("../../hvm-api/src/graphql/queries.ts");
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
let successCount = 0;
let failureCount = 0;
let currentCityIndex = 0;

const getCityImages = async (city) => {
  try {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashClientId}&query=${city}`,
      { headers: { "Content-Type": "application/json" } }
    );

    const cityImages = res.data?.results?.slice(0, 10).map((image) => {
      let cityImage = {
        unsplashId: image?.id,
        description: image?.description,
        urls: image?.urls,
        height: image?.height,
        width: image?.width,
        unsplashLikes: image?.likes,
      };
      return cityImage;
    });
    return cityImages;
  } catch (error) {
    console.error(
      `Failed to get images for ${city} at index ${currentCityIndex}`,
      error
    );
    failureCount++;
    return null;
  }
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
    return null;
  }
};

const delay = (interval) =>
  new Promise((resolve) => setTimeout(resolve, interval));

const MAX_REQUESTS = 50; // maximum requests per interval
const INTERVAL = 61 * 60 * 1000; // 61 minutes in milliseconds
let requestCount = 0; // counter for the number of requests made

const updateCityImages = async () => {
  for (const city of cities) {
    currentCityIndex++;
    if (requestCount >= MAX_REQUESTS) {
      console.log(
        `Reached limit of ${MAX_REQUESTS} requests. Waiting for ${
          INTERVAL / 60 / 1000
        } minutes.`
      );
      console.log(
        `current time: ${new Date().toLocaleTimeString()}, current city: ${city.city}`
      );
      await delay(INTERVAL);
      requestCount = 0;
    }

    const cityCountry = city.city + ", " + city.country;
    const cityFromDynamoDB = await getCityFromDynamoDB(cityCountry);

    // if (cityFromDynamoDB && 'images' in cityFromDynamoDB) {
    //   // Check if images already exist

    if (cityFromDynamoDB) {
      if (cityFromDynamoDB && cityFromDynamoDB.images !== null) {
        console.log(
          `Images already exist for ${city.city}, skipping Unsplash query.`
        );
        continue;
      }

      const cityImages = await getCityImages(city.city);
      requestCount++;

      if (cityImages) {
        const input = {
          cityCountry,
          ...cityFromDynamoDB,
          images: cityImages,
        };

        console.log("input", input);

        try {
          const result = await Amplify.API.graphql({
            query: updateCityPrice,
            variables: {
              input,
            },
          });
          console.log(result.data.updateCityPrice);
          successCount++;
        } catch (error) {
          console.error(
            `Error updating images for city: ${city.city} at index ${currentCityIndex}`,
            error
          );
          failureCount++;
        }
      } else {
        console.log(
          `Failed to get images for ${city.city} at index ${currentCityIndex}. Incrementing failure count and continuing.`
        );
        failureCount++;
      }
      // } else {
      //   console.log(
      //     `Failed to get data for ${city.city} from DynamoDB at index ${currentCityIndex}. Incrementing failure count and continuing.`
      //   );
      //   failureCount++;
      // }
    }
    console.log(
      `Success Count: ${successCount}, Failure Count: ${failureCount}`
    );
  }
};

updateCityImages();

// get images for city from unsplash
// update city record in dynamodb with image urls
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

updateCityImages();
