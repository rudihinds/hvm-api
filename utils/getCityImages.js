var axios = require("axios").default;
const fs = require("fs");
require("dotenv").config();

const unsplashClientId = process.env.UNSPLASH_CLIENT_ID;

/**
 * to do:
 *    - setup error handling (test first)
 *    - change one city per hour to max limit on API
 *    - create new json from test
 *    - switch fake city array with real city array
 */

// sample data
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
    id: 13538,
    wikiDataId: "Q1023796",
    type: "CITY",
    city: "chicago",
    name: "chicago",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 32.38521,
    longitude: 120.5634,
    population: 1267066,
  },
  {
    id: 13538,
    wikiDataId: "Q1023796",
    type: "CITY",
    city: "new york",
    name: "new york",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 32.38521,
    longitude: 120.5634,
    population: 1267066,
  },
  // {
  //   id: 13136,
  //   wikiDataId: "Q1207076",
  //   type: "CITY",
  //   city: "Tabuk, Saudi Arabia",
  //   name: "Tabuk, Saudi Arabia",
  //   country: "People's Republic of China",
  //   countryCode: "CN",
  //   region: "Shandong",
  //   regionCode: "SD",
  //   latitude: 35.083333333,
  //   longitude: 117.15,
  //   population: 1603659,
  // },
  // {
  //   id: 13136,
  //   wikiDataId: "Q1207076",
  //   type: "CITY",
  //   city: "Tabuk, Saudi Arabia",
  //   name: "Tabuk, Saudi Arabia",
  //   country: "People's Republic of China",
  //   countryCode: "CN",
  //   region: "Shandong",
  //   regionCode: "SD",
  //   latitude: 35.083333333,
  //   longitude: 117.15,
  //   population: 1603659,
  // },
  {
    id: 13136,
    wikiDataId: "Q1207076",
    type: "CITY",
    city: "Tabuuuuu",
    name: "Tabuuuuu",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Shandong",
    regionCode: "SD",
    latitude: 35.083333333,
    longitude: 117.15,
    population: 1603659,
  },
  {
    id: 13136,
    wikiDataId: "Q1207076",
    type: "CITY",
    city: "sdbsdbasdbau",
    name: "sdbzdbsadbdbuu",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Shandong",
    regionCode: "SD",
    latitude: 35.083333333,
    longitude: 117.15,
    population: 1603659,
  },
];

const cityarr2 = [
  {
    id: 13538,
    wikiDataId: "Q1023796",
    type: "CITY",
    city: "Rugsdfbndfndfadfao",
    name: "Rugdfndfndfndfnfao",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 32.38521,
    longitude: 120.5634,
    population: 1267066,
  },
  {
    id: 13241,
    wikiDataId: "Q197377",
    type: "CITY",
    city: "Zhangjiagang",
    name: "Zhangjiagang",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 31.87748,
    longitude: 120.55123,
    population: 1432044,
  },
  {
    id: 12684,
    wikiDataId: "Q132830",
    type: "CITY",
    city: "Douala",
    name: "Douala",
    country: "Cameroon",
    countryCode: "CM",
    region: "Littoral",
    regionCode: "LT",
    latitude: 4.05,
    longitude: 9.7,
    population: 2446945,
  },
  {
    id: 9709,
    wikiDataId: "Q193021",
    type: "CITY",
    city: "Duque de Caxias",
    name: "Duque de Caxias",
    country: "Brazil",
    countryCode: "BR",
    region: "Rio de Janeiro",
    regionCode: "RJ",
    latitude: -22.78556,
    longitude: -43.31167,
    population: 924624,
  },
  {
    id: 9334,
    wikiDataId: "Q184409",
    type: "CITY",
    city: "Guarulhos",
    name: "Guarulhos",
    country: "Brazil",
    countryCode: "BR",
    region: "São Paulo",
    regionCode: "SP",
    latitude: -23.46278,
    longitude: -46.53333,
    population: 1392121,
  },
  {
    id: 84919,
    wikiDataId: "Q3037",
    type: "CITY",
    city: "Kathmandu",
    name: "Kathmandu",
    country: "Nepal",
    countryCode: "NP",
    region: "Western Region",
    regionCode: "3",
    latitude: 27.716666666,
    longitude: 85.366666666,
    population: 975453,
  },
  {
    id: 81899,
    wikiDataId: "Q912576",
    type: "ADM2",
    city: "Dakoro Department",
    name: "Dakoro Department",
    country: "Niger",
    countryCode: "NE",
    region: "Maradi Region",
    regionCode: "4",
    latitude: 14.51055556,
    longitude: 6.765,
    population: 630421,
  },
  {
    id: 82142,
    wikiDataId: "Q1023720",
    type: "ADM2",
    city: "Jalingo",
    name: "Jalingo",
    country: "Nigeria",
    countryCode: "NG",
    region: "Taraba State",
    regionCode: "TA",
    latitude: 8.9,
    longitude: 11.366666666,
    population: 660213,
  },
  {
    id: 81763,
    wikiDataId: "Q221436",
    type: "CITY",
    city: "Maiduguri",
    name: "Maiduguri",
    country: "Nigeria",
    countryCode: "NG",
    region: "Borno State",
    regionCode: "BO",
    latitude: 11.833333333,
    longitude: 13.15,
    population: 1197497,
  },
  {
    id: 82318,
    wikiDataId: "Q8673",
    type: "CITY",
    city: "Lagos",
    name: "Lagos",
    country: "Nigeria",
    countryCode: "NG",
    region: "Lagos",
    regionCode: "LA",
    latitude: 6.45,
    longitude: 3.4,
    population: 14862000,
  },
  {
    id: 13538,
    wikiDataId: "Q1023796",
    type: "CITY",
    city: "Rugao",
    name: "Rugao",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 32.38521,
    longitude: 120.5634,
    population: 1267066,
  },
  {
    id: 13241,
    wikiDataId: "Q197377",
    type: "CITY",
    city: "Zhangjiagang",
    name: "Zhangjiagang",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 31.87748,
    longitude: 120.55123,
    population: 1432044,
  },
  {
    id: 12684,
    wikiDataId: "Q132830",
    type: "CITY",
    city: "Douala",
    name: "Douala",
    country: "Cameroon",
    countryCode: "CM",
    region: "Littoral",
    regionCode: "LT",
    latitude: 4.05,
    longitude: 9.7,
    population: 2446945,
  },
  {
    id: 9709,
    wikiDataId: "Q193021",
    type: "CITY",
    city: "Duque de Caxias",
    name: "Duque de Caxias",
    country: "Brazil",
    countryCode: "BR",
    region: "Rio de Janeiro",
    regionCode: "RJ",
    latitude: -22.78556,
    longitude: -43.31167,
    population: 924624,
  },
  {
    id: 9334,
    wikiDataId: "Q184409",
    type: "CITY",
    city: "Guarulhos",
    name: "Guarulhos",
    country: "Brazil",
    countryCode: "BR",
    region: "São Paulo",
    regionCode: "SP",
    latitude: -23.46278,
    longitude: -46.53333,
    population: 1392121,
  },
  {
    id: 84919,
    wikiDataId: "Q3037",
    type: "CITY",
    city: "Kathmandu",
    name: "Kathmandu",
    country: "Nepal",
    countryCode: "NP",
    region: "Western Region",
    regionCode: "3",
    latitude: 27.716666666,
    longitude: 85.366666666,
    population: 975453,
  },
  {
    id: 81899,
    wikiDataId: "Q912576",
    type: "ADM2",
    city: "Dakoro Department",
    name: "Dakoro Department",
    country: "Niger",
    countryCode: "NE",
    region: "Maradi Region",
    regionCode: "4",
    latitude: 14.51055556,
    longitude: 6.765,
    population: 630421,
  },
  {
    id: 82142,
    wikiDataId: "Q1023720",
    type: "ADM2",
    city: "Jalingo",
    name: "Jalingo",
    country: "Nigeria",
    countryCode: "NG",
    region: "Taraba State",
    regionCode: "TA",
    latitude: 8.9,
    longitude: 11.366666666,
    population: 660213,
  },
  {
    id: 81763,
    wikiDataId: "Q221436",
    type: "CITY",
    city: "Maiduguri",
    name: "Maiduguri",
    country: "Nigeria",
    countryCode: "NG",
    region: "Borno State",
    regionCode: "BO",
    latitude: 11.833333333,
    longitude: 13.15,
    population: 1197497,
  },
  {
    id: 82318,
    wikiDataId: "Q8673",
    type: "CITY",
    city: "Lagos",
    name: "Lagos",
    country: "Nigeria",
    countryCode: "NG",
    region: "Lagos",
    regionCode: "LA",
    latitude: 6.45,
    longitude: 3.4,
    population: 14862000,
  },
  {
    id: 14381,
    wikiDataId: "Q1025837",
    type: "ADM2",
    city: "Caidian District",
    name: "Caidian District",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Hubei",
    regionCode: "HB",
    latitude: 30.58443,
    longitude: 114.02365,
    population: 719900,
  },
  {
    id: 13440,
    wikiDataId: "Q57719",
    type: "CITY",
    city: "Xuzhou",
    name: "Xuzhou",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Jiangsu",
    regionCode: "JS",
    latitude: 34.26104,
    longitude: 117.18587,
    population: 8669000,
  },
  {
    id: 13580,
    wikiDataId: "Q198061",
    type: "CITY",
    city: "Zhoukou",
    name: "Zhoukou",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Henan",
    regionCode: "HA",
    latitude: 33.62502,
    longitude: 114.6418,
    population: 9901000,
  },
  {
    id: 13136,
    wikiDataId: "Q1207076",
    type: "CITY",
    city: "Tengzhou",
    name: "Tengzhou",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Shandong",
    regionCode: "SD",
    latitude: 35.083333333,
    longitude: 117.15,
    population: 1603659,
  },
  {
    id: 13257,
    wikiDataId: "Q496496",
    type: "CITY",
    city: "Yuxi",
    name: "Yuxi",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Yunnan",
    regionCode: "YN",
    latitude: 24.355,
    longitude: 102.54222,
    population: 2303518,
  },
  {
    id: 13820,
    wikiDataId: "Q59095",
    type: "CITY",
    city: "Zhuhai",
    name: "Zhuhai",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Guangdong",
    regionCode: "GD",
    latitude: 22.27694,
    longitude: 113.56778,
    population: 1891100,
  },
  {
    id: 13032,
    wikiDataId: "Q197519",
    type: "CITY",
    city: "Zhaotong",
    name: "Zhaotong",
    country: "People's Republic of China",
    countryCode: "CN",
    region: "Yunnan",
    regionCode: "YN",
    latitude: 27.31667,
    longitude: 103.71667,
    population: 5213521,
  },
];

const errors = [];
// loops through each city and runs getTenUnsplashImagesForACity for each city,
// returns a new array of city Image objects, now including image urls.
const getImageDataForCities = async (citiesArr) => {
  // let tenImagesFullData;
  let imageFetchData = [];
  let failedImageFetchData = [];
  let city = "";
  console.log("inside getimgdata");
  for (let i = 0; i < citiesArr.length; i++) {
    await staggerApiCalls(i);
    try {
      city = citiesArr[i].name;
      tenImagesFullData = await getTenUnsplashImagesForACity(citiesArr[i].name);
      if (tenImagesFullData?.imagesAvailable === false) {
        console.log("no images for", citiesArr[i].name);
        failedImageFetchData.push(tenImagesFullData);
        writeFailedCitiesToJson(failedImageFetchData);
        console.log("i =", i);
        failedImageFetchData = [];
      } else {
        console.log("found images for", citiesArr[i].name);
        imageFetchData.push({ ...tenImagesFullData, city: citiesArr[i].name });
        console.log("i =", i);

        organiseImageDataAndWriteToJson(imageFetchData);
        imageFetchData = [];
      }
    } catch (e) {
      console.log("there was an error", e.message);
      errors.push({
        city,
        message: e.message,
      });
    }
  }
};

/**
 *
 * @param {*} unorganisedCityImages
 * takes array of objects, returns modified array of objects with cityname and array of image objects
 * object is unorganised image data
 * object has city property with string of city
 */
function organiseImageDataAndWriteToJson(unorganisedCityImages) {
  console.log("inside organiseImageDataAndWriteToJson");
  console.log("passed in data", unorganisedCityImages);
  const organisedCityObjectsWithImages = [];
  const newArr = unorganisedCityImages.map((cityFullImageObj) => {
    const arrImgObjsOneCity = cityFullImageObj.results.map((images) =>
      convertObject(images, cityFullImageObj.city)
    );
    return {
      city: cityFullImageObj.city,
      images: arrImgObjsOneCity,
    };
  });
  console.log(
    "inside something, length of cities with converted objects is",
    newArr.length
  );
  writeCitiesToJson(newArr);
}

const writeCitiesToJson = (somearr) => {
  fs.readFile("./sampleCityWithImages.json", function (err, data) {
    var json = JSON.parse(data);
    let newObj = [...json, ...somearr];
    fs.writeFile(
      "./sampleCityWithImages.json",
      JSON.stringify(newObj),
      function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      }
    );
  });
};

const writeFailedCitiesToJson = (cities) => {
  fs.readFile("./failedCityWithImages.json", function (err, data) {
    var json = JSON.parse(data);
    let newObj = [...json, ...cities];
    fs.writeFile(
      "./failedCityWithImages.json",
      JSON.stringify(newObj),
      function (err) {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      }
    );
  });
};

/**
 * function takes index of loop making api calls and adds a (1 hr) delay every time it increments by 50
 * unsplash API has 50 per hour api call limit
 */

const staggerApiCalls = async (i) => {
  // wait an hour every time we make 50 requests
  let time = 3720000;
  console.log("stagger called");
  if (i !== 0 && i % 50 === 0) {
    console.log(
      `...waiting an hour again before calling again. time was ${new Date()}`
    );
    await new Promise((r) => setTimeout(r, time));
  }
};

/**
 * Function to extract city image data from Unsplash API given a city name. In the end it will do 1 thing
 * add the image urls to the city data object.
 * returns single city image data given a (roughly) correct spelling
 */

const getTenUnsplashImagesForACity = (city) => {
  console.log("inside api fetch function");
  return axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashClientId}&query=${city}`
    )
    .then((res) => {
      console.log("inside unsplash fetch then", res.status);
      // console.log(res);
      if (res.data && res.data.total !== 0) {
        console.log("passed condition checks for ", city);
        return res.data;
      } else {
        console.log("failed condition checks, no images for", city);
        // console.log("res.data: ", res.data);
        return { city, imagesAvailable: false, results: res.data };
      }
    })
    .catch((err) => {
      console.log("inside unsplash fetch catch", err.message);
      errors.push({
        city,
        imagesAvailable: false,
        results: res.data,
        message: err.message,
      });
    });
};

// used in loopcities func.
// format image object schema and return data we need in image object
// Each city will have ten image objects (multiple images) by this being run ten times,
// once for each unsplash image object (we are requesting api for ten images)
const convertObject = (imgDataObj, cityName) => {
  const { id, description, alt_description, urls } = imgDataObj;
  const cityImageObj = {
    unsplashId: id,
    name: cityName,
    city: cityName,
    description: description,
    alt_description,
    urls,
  };
  // console.log(cityImageObj);
  return cityImageObj;
};

const parseCitiesJsonAndPassToRunner = () => {
  fs.readFile("./cities+5m.json", function (err, data) {
    jsonObj = JSON.parse(data);
    getImageDataForCities(jsonObj);
  });
};

parseCitiesJsonAndPassToRunner();
module.exports = getImageDataForCities;
