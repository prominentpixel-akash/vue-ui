/**
 *  Global Functions and variables initialize
 */
class GlobalFunctionsAndVariables {

    static initializeGlobals(applicationRoot) {
        global.applicationRoot = applicationRoot;
        global.dbr = {
            pool: {}
        };
    }
};

module.exports = GlobalFunctionsAndVariables;
