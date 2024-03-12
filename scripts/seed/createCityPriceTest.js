/**
 * Sends a test mutation to create a sample city price record.
 * Uses axios to make a GraphQL mutation request to the API endpoint.
 * Logs the response and any errors.
 */
const axios = require("axios");
const endpoint = "http://192.168.0.17:20002/graphql";
require("dotenv").config();

const API_KEY = process.env.APPSYNC_API_KEY;

const headers = {
  "Content-Type": "application/json",
  "x-api-key": API_KEY,
};

const testMutation = `
  mutation TestCreateCityPrice {
    createCityPrice(input: {
      cityCountry: "TestCity1, TestCountry1"
      numbeoCityId: 1234
      city: "TestCity1"
      country: "TestCountry1"
      currency: "USD"
      contributors12Months: 10
      monthLastUpdate: 1
      contributors: 5
      yearLastUpdate: 2024
    }) {
      cityCountry
    }
  }
`;

async function sendTestMutation() {
  try {
    const response = await axios.post(
      endpoint,
      {
        query: testMutation,
      },
      {
        headers: headers,
      },
    );
    console.log("Mutation response:", response.data);
  } catch (error) {
    console.error("Error sending test mutation:", error.message);
  }
}

sendTestMutation();
