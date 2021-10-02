const express = require("express");
const app = express();
const fetch = require("node-fetch");
var axios = require("axios").default;
const fs = require("fs");
const _ = require("underscore");

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

// app.get("/cities", (req, res) => {
//   let i = 0;

//   let timeHasrun = setInterval(() => {
//     fetch(
//       `https://www.numbeo.com/api/city_prices?api_key=1dap9z2dq3eguv&query=${cities[i]}`
//     )
//       .then((res) => res.json())
//       .then((body) => {
//         console.log(body);
//         i++;
//         if (i === 4) {
//           clearInterval(timeHasrun);
//         }
//       });
//   }, 3000);
// });

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
app.listen(port, () => console.log("waiting on port 3000"));
