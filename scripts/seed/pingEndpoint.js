const axios = require("axios");

const endpoint = "http://192.168.0.17:20002";

async function pingEndpoint() {
  try {
    const response = await axios.get(endpoint);
    console.log("Endpoint reachable. Status:", response.status);
  } catch (error) {
    console.error("Error reaching endpoint:", error.message);
  }
}

pingEndpoint();
