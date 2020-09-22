function update(username, password) {
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "custom:scope",
        Value: "some new value"
    }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: "name",
        Value: "some new value"
    }));

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username: username,
        Password: password,
    });

    var userData = {
        Username: username,
        Pool: userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.updateAttributes(attributeList, (err, result) => {
        if (err) {
            //handle error
        } else {
            console.log(result);
        }
    });
}
