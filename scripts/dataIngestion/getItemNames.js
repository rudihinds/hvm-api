const fs = require("fs");
const path = require("path");

// File path
const jsonFilePath = path.resolve(
  __dirname,
  "../..",
  "data/mocks/dbjson/numbeoCityPricesActual.json",
);

// Read file
const fileData = fs.readFileSync(jsonFilePath, "utf8");
const cities = JSON.parse(fileData);

// get city where name string includes "New York, NY"
const city = cities.find((city) => city.name.includes("New York, NY"));

// Extract unique item names
const itemNames = city.prices.map((price) => price.item_name);
const uniqueItemNames = [...new Set(itemNames)];

// console.log(uniqueItemNames);

// create an object with unique item names as keys and an object with the keys: baseFreq, workingClassFreq,
// middleClassFreq, highValueFreq, and eliteFreq. The values will be undefined initially
const itemNamesObj = {};
uniqueItemNames.forEach((name) => {
  itemNamesObj[name] = {
    adult: {
      workingClassFreq: 0,
      middleClassFreq: 0,
      highValueFreq: 0,
    },
    child: {
      workingClassFreq: 0,
      middleClassFreq: 0,
      highValueFreq: 0,
    },
  };
});

// Write unique names to new file
const outputPath = path.resolve(
  __dirname,
  "..",
  "..",
  "data/mocks/dbjson/itemsPurchaseFrequency.json",
);
fs.writeFileSync(outputPath, JSON.stringify(itemNamesObj, null, 2));
