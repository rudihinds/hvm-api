const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB({
  region: 'us-west-2',
  endpoint: 'http://localhost:8000'
});

dynamoDB.listTables({}, (err, data) => {
  if (err) {
    console.error('Error', err);
  } else {
    console.log('Tables', data.TableNames);
  }
});
