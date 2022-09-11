/**
 * This will hit the api and return all cities with minimum population of 5 million or more.
 * It writes a file called cities+5m.json
 */

var axios = require("axios").default;
const fs = require("fs");
const _ = require("underscore");

const minPopulation = '5000000'
let offset = 0;
const wait = setInterval(() => {
  console.log("starting again");
  var options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { minPopulation, limit: "10", offset },
    headers: {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": "242082b19cmsh4be862b573d4b36p1d9471jsn233cb8d92a13",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      const data = response.data.data;
      fs.readFile("./cities.json", (err, fileData) => {
        if (err) console.log(err);
        const fileAsJsonObj = JSON.parse(fileData);
        const newObj = [...data, ...fileAsJsonObj];
        console.log(offset);
        fs.writeFile("./cities+5m.json", JSON.stringify(newObj), (err, res) => {
          if (err) console.log(err);
        });
        offset += 10;
        if (offset > 170) clearInterval(wait);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}, 3000);
