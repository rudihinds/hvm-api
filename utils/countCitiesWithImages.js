const fs = require("fs");

function countCities1(json) {
  fs.readFile("./cities+5m.json", (err, data) => {
    if (err) console.log(err.message);
    console.log(JSON.parse(data)[1003]);
    // const cities = JSON.parse(data)
    // console.log(data);
    if (err) console.log(err);
  });
}

function countCities3() {
  fs.readFile("./sampleCityWithImages.json", (err, data) => {
    if (err) console.log(err.message);
    let json = JSON.parse(data);
    let lastItem = json[json.length - 1];
    // const cities = JSON.parse(data)
    console.log(json.length);
    if (err) console.log(err);
  });
}

function getCityIndexToRestartDataFetch() {
  let currentCity;
  fs.readFile("./sampleCityWithImages.json", (err, data) => {
    data = JSON.parse(data);
    currentCity = data[data.length - 1].city;
    fs.readFile("./cities+5m.json", (err, data) => {
      if (err) console.log(err.message);
      let json = JSON.parse(data);
      for (let i = 0; i < json.length; i++) {
        if (json[i].city === currentCity) {
          console.log("index of current item in cities 5m+ is", i);
        }
      }
    });
  });
}

function getLastItemIndex(jsonObject) {
  console.log(jsonObject.length);
}

// countCities1()
getCityIndexToRestartDataFetch();
