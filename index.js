require("dotenv").config();
const express = require("express");
const app = express();
const fetch = require("node-fetch");
var axios = require("axios").default;
const fs = require("fs");
const _ = require("underscore");
const loopCities = require("./utils/test");
// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const uri = process.env.MONGO_DB_STRING;
const Schema = mongoose.Schema;

//connect to local mongodb server on 27017
mongoose.connect("mongodb://localhost:27017/test");
// console.log(uri);
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

//some schema, needed for test userdata retrieval below
const TestSchema = new Schema({
  title: String,
  content: String,
  author: String,
});

//set up userdata model as test
const userData = mongoose.model("User Data", TestSchema);

async function main() {
  const myUri = `mongodb+srv://cluster0.mongodb.net/hvm?retryWrites=true&w=majority`;

  // await mongoose.connect(myUri, {
  //   user: process.env.MONGO_USER,
  //   pass: process.env.MONGO_PASSWORD,
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

  const kittySchema = new mongoose.Schema({
    name: String,
  });

  const Kitty = new mongoose.model("Kitty", kittySchema);

  const alfie = new Kitty({ name: "Alfie" });
  await alfie.save();
  const kittens = await Kitty.find();
  console.log("kittens: ", kittens);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

main().catch((err) => console.log(err));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === "options") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.get("/", (req, res) => {
  res.send("HVM APP");
});

// const cities = ["London", "New York", "Chicago", "Leicester", "Manchester"];

// app.get('/', (req, res) =>  {
//     res.send('HVM APP')
// })

// const cities = ['London', 'New York', 'Chicago', 'Leicester', 'Manchester']

// app.get('/cities', (req, res) => {

//   let i = 0

//  let timeHasrun = setInterval(() => {
//     fetch(`https://www.numbeo.com/api/city_prices?api_key=1dap9z2dq3eguv&query=${cities[i]}`)
//           .then(res => res.json())
//           .then((body) => {
//             console.log(body)
//             i++
//             if(i === 4 ){
//                   clearInterval(timeHasrun)
//               }
//           })
//   }, 3000)

// } )
// comment

// cities.forEach((city, i) => {
//   setTimeout(() => {
//     fetch(`https://www.numbeo.com/api/city_prices?api_key=1dap9z2dq3eguv&query=${city}`)
//       .then(res => res.json())
//       .then((body) => {
//       console.log(body)
//       })
//       .catch((error) => console.log(error))
//   }, i * 1000)

// })

// var timesRun = 0;
// var interval = setInterval(function(){
//     timesRun ++
//     if(timesRun === 5){
//         clearInterval(interval);
//     }
//     console.log('this has run')
// }, 2000);

// let timeHasrun = setInterval(() => {
//   // fetch(`https://www.numbeo.com/api/city_prices?api_key=1dap9z2dq3eguv&query=${cities[i]}`)
//   //       .then(res => res.json())
//   //       .then((body) => {
//   //       console.log(body)
//   //       if(i < 4 ){
//   //         i++
//   //         console.log(i)
//   //       }
//   //       })
//   i++
//   console.log(i)
//   console.log('this ran')
//   if(i === 4 ){
//         clearInterval(timeHasrun)
//     }
// }, 3000)

const port = process.env.PORT || "3000";
app.listen(port, () => console.log("waiting on port 3000!!"));
