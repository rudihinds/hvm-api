const fs = require("fs");
const path = require("path");

const file = path.resolve(
  __dirname,
  "..",
  "..",
  "citiesFromDbWithNoImages.json"
);

fs.readFile(file, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const cities = JSON.parse(data);
  console.log(cities.length);
});
