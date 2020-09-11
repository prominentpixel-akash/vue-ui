const ApiContext = require('./apiContext');
const promise = require('bluebird');

const {genUUID, generateHash, compareHash} = require('../utils/general');

/**
 * Provides the base class for API services.
 * @memberof base
 */
class ApiService {

    /**
     * Initializes a new instance of ApiService
     * @param {ApiContext} context The context to use with this service.
     * @throws {Error} If the `context` is undefined, or not an instance of `ApiContext`.
     */
    constructor(context) {

        if (!context || !(context instanceof ApiContext)) {
            throw new Error('The context argument needs to be an instance of ApiContext');
        }

        /**
         * The context under which the service is executing.
         * @type {base.ApiContext}
         */
        this.context = context;
    }
    /**
     * To promisify file service methods
     *
     * @param {Object} module module to promisify
     * @returns {Object} Service Object
     */
    promisifyService(module) {
        return promise.promisifyAll(module, {
            filter: () => true
        });
    }

    genUUID() {
        return genUUID();
    }

    async generatePasswordHash(password) {
        return await generateHash(password);
    }

    async comparePasswordHash(password, passwordHashToCompare) {
        return await compareHash(password, passwordHashToCompare);
    }

}

module.exports = ApiService;
