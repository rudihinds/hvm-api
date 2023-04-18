# hvm-api

install aws cli
## install serverless 
npm install -g serverless

## install dynamo db local
configure using any creds using cli or

vim ~/.aws/credentials

(paste the following)
[default]
aws_access_key_id = fakeaccess
aws_secret_access_key = fakesecret

## local credentials
  region: "eu-west-1",
  accessKeyId: "fakeaccess",
  secretAccessKey: "fakesecret",
  endpoint: "http://localhost:8000",

## install amplify 
npm install -g @aws-amplify/cli
