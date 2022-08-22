const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const kittySchema = new Schema({
  title: { type: String, required: true },
});

