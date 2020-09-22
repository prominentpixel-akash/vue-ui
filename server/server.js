const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const GlobalFunctions = require('./utils/globalFunction');
const ApplicationError = require('./base/applicationError');
const appSetting = require('./config/settings');

global.app = express();

GlobalFunctions.initializeGlobals(__dirname);
appSetting.initialize();

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