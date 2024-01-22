/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

require = require("esm")(module);
const { DynamoDB } = require("aws-sdk");
const { cityPrices } = require("../../../../../scripts/seed/cityPrices");

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(cityPrices(10));

  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
