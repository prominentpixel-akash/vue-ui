const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const GlobalFunctions = require('./utils/globalFunction');
const ApplicationError = require('./base/applicationError');
const appSetting = require('./config/settings');

global.app = express();

GlobalFunctions.initializeGlobals(__dirname);
appSetting.initialize();


const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const poolData = {
  UserPoolId : "ap-south-1_puUadfKhW", // Your user pool id here
  ClientId : "67rmt5icmjejbgc0hpt7ibgmsa" // Your client id here
}; const pool_region = 'ap-south-1';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-south-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-south-1:f713fe93-681b-4016-8d32-46322154dceb',
});

const corsOptions = {
  origin: function (origin, callback) {
    if (!appSetting.get('whiteListIpsCheck')) {
      return callback(null, true)
    }
    if (appSetting.get('whiteListIps').indexOf(origin) !== -1) {
      return callback(null, true)
    }
    return callback(ApplicationError.invalidOperation("Not allowed by CORS"));
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.raw());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '100mb'
}));

require('./routes');


app.listen(8000, () => {
  console.log(`App listening on port 8000`);
});
