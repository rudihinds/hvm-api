require('dotenv').config()
var axios = require("axios").default;

const unsplashClientId = process.env.UNSPLASH_CLIENT_ID

const arr = [
  {
    id: 13538,
    wikiDataId: "Q1023796",
    type: "CITY",
    city: "london",
    name: "london",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 32.38521,
    longitude: 120.5634,
    population: 1267066,
  },
  {
    id: 13136,
    wikiDataId: "Q1207076",
    type: "CITY",
    city: "Tabuk, Saudi Arabia",
    name: "Tabuk, Saudi Arabia",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Shandong",
    regionCode: "SD",
    latitude: 35.083333333,
    longitude: 117.15,
    population: 1603659,
  },
];

/**
 * Function to extract city image data from Unsplash API. In the end it will do 2 things
 *  a. Store object on Model to store relevant data on our DB. this includes links to images on unsplash API
 */

const getImageData = (city) => {
  const results = axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashClientId}&query=${city}`
    )
    .then((res) => res.data.results);
  return results;
};

const loopCities = async (cityArr) => {
  let allCitiesImageData = [];
  for (i = 0; i < cityArr.length; i++) {
    const oneCityTenImages = await getImageData(cityArr[i].name)
      .then((results) => {
        return results.map((imageDataObj) => convertObject(imageDataObj, cityArr[i].name));
      })
      .catch((err) => console.log(err));
    allCitiesImageData = [
      ...allCitiesImageData,
      ...oneCityTenImages
    ]
  }
  console.log(allCitiesImageData);
};

const convertObject = (imgDataObj, cityName) => {
  const { id, description, alt_description, width, height, urls, user } =
    imgDataObj;
  const cityImageObj = {
    unsplashId: id,
    name: cityName,
    city: cityName,
    width: width,
    height: height,
    description: description,
    alt_description,
    user: { id: user.id, username: user.username },
    urls,
  };
  return cityImageObj;
};

loopCities(arr);
