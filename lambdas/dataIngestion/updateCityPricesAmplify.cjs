// import citiesfromdbwithoutimages from './citiesfromdbwithoutimages.json';
// loop cities
// for each city get image from unsplash
// if fails push cityname to array
// if succeeds update city in db with image urls (first check the shape of the data that comes back from unsplash)
// make count of successes and fails and log at end of script
require = require("esm")(module);
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { updateCity } = require('../../src/graphql/mutations.ts');
const { API, graphqlOperation } = require('aws-amplify');
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
    city = "London"
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashClientId}&query=${city}`,
      { headers: { "Content-Type": "application/json" } }
    )
    console.log(res.data.results.slice(0, 10));
}

getCityImages();