

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  /**
   * we will have the following params:
   * number of people: eg single, couple, small family, large family
   * country: eg USA, UK, Canada, Australia, Germany, France, Italy, Spain, Japan, China, India, Brazil, Mexico, South Africa, Nigeria, Kenya, Egypt, Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman, Jordan, Lebanon, Turkey, Russia, Ukraine, Poland, Sweden, Norway, Finland, Denmark, Netherlands, Belgium, Switzerland, Austria, Portugal, Greece, Ireland, Scotland, Wales, Northern Ireland, New Zealand, Singapore, Malaysia, Thailand, Vietnam, Indonesia, Philippines, South Korea, Taiwan
   * minCostOfLiving: eg 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000
   * maxCostOfLiving: eg 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000
   * we will need to query the FilterCombination table return the matching city items that satisfy the above params
   */
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify("Hello from Lambda!"),
  };
};
