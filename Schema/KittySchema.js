const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const kittySchema = new Schema({
  title: { type: String, required: true },
});


const cityObject = {
  id: Number,
  unsplashId: Number,
  name: String,
  city: String,
  width: Decimal128,
  height: height,
  description: description,
  alt_description,
  user: { id: user.id, username: user.username },
  urls,
  demographicData: {
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
};
