const appSetting = require('../config/settings');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
    UserPoolId: appSetting.cognito.userPoolId, // Your user pool id here
    ClientId: appSetting.cognito.clientId // Your client id here
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.Register = function (body, callback) {
    var name = body.regusername;
    var email = body.email;
    var password = body.regpassword;
    var attributeList = [];

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: "email", Value: email }));
    userPool.signUp(name, password, attributeList, null, function (err, result) {
        if (err)
            return callback(err);
        var cognitoUser = result.user;
        callback(null, cognitoUser);
    })
}

exports.Login = function (body, callback) {
    var username = body.username;
    var password = body.password;
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        username: username,
        password: password
    });
    var userData = {
        username: username,
        Pool: userPool
    }
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accesstoken = result.getAccessToken().getJwtToken();
            return callback(null, accesstoken);
        },
        onFailure: (function (err) {
            return callback(err);
        })
    })
};

