function Login() {
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : "akashnar@gmail.com",
        Password : "Akash@123",
    });

    var userData = {
        Username : "akashnar@gmail.com",
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log("access token + " + result.getAccessToken().getJwtToken());
            console.log("id token + " + result.getIdToken().getJwtToken());
            console.log("refresh token + " + result.getRefreshToken().getToken());
        },
        onFailure: function(err) {
            console.log(err);
        },

    });
}
