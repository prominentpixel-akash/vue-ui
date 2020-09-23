/**
 *  Global Functions and variables initialize
 */
class GlobalFunctionsAndVariables {

    static initializeGlobals(applicationRoot) {
        global.applicationRoot = applicationRoot;
        global.fetch = require('node-fetch');
        global.navigator = () => null;
    }
};

module.exports = GlobalFunctionsAndVariables;
