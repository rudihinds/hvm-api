const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    uid: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
    img: {
      type: String,
    },
    prices: {
      type: []
    },
    dateCreatedAt: {
      type: Date,
      required: true,
    },
    country: {
      type: String
    },
    prices: {
      type: []
    }, 
    population: {
      type: Number,
    },
    lat: {
      type: Number,
      required: false
   },
    lon: {
      type: Number,
      required: false
   },
  });

  module.exports = City = mongoose.model("City", CitySchema);
