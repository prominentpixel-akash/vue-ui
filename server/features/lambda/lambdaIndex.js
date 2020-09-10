const lambdaApi = require('./lambdaApi');

module.exports = function initializeRoutes(app) {
    lambdaApi.register(app);
};
