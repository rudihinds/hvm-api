var axios = require("axios").default;
const fs = require("fs");
const fetch = require("node-fetch");

// parse city data to js obj
// each city obj, get city name
// create query string for numbeo including city name
// fetch numbeo data for single city
// need to write a new JSON and store to db

let queryStr =
  `https://www.numbeo.com/api/city_prices?api_key=${process.env.NUMBEO_API_KEY}&query=`;

const parseCityData = async () => {
  fs.readFile("./cities+5m.json", "utf8", (err, data) => {
    console.log('cities total', JSON.parse(data).length);
    if (err) console.log(err);
    const cityName = JSON.parse(data)[0].name;
    queryStr = queryStr + cityName;
    fetch(queryStr)
      .then((res) => res.json())
      .then(data => data)
      .catch(err => console.log('error getting city data', err));
    // console.log(queryStr);
  });
};

parseCityData();

const getCitiesData = () => {};

module.exports = getCitiesData;
