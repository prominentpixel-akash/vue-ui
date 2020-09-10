/**
 * Provides access to the execution context within an HTTP request.
 * @class
 * @memberof base
 */
class ApiContext {

    /**
     * Initializes a new instance of `ApiContext`.
     * @param {IncomingMessage} request The request instance to initialize the context with.
     * @param {base.db.DbDriver} connection The user connection to use with this context.
     *     will be created automatically and initialized with the specified `request` object.
     */
    constructor(request, connection) {

        /**
         * The current request object
         * @type {IncomingMessage}
         */
        this.request = request;

        /**
         * The current response object
         * @type {ServerResponse}
         */
        this.response = request.res;

        /**
         * Connection object of the user
         * @type {base.db.DbDriver}
         */
        this.connection = connection;

        /**
         * Connection object of the user
         * @type {base.db.DbDriver}
         */
        this.conn = connection;

        /**
         * User of the express Request
         * @type {Object}
         */
        this.user = request.user;

        /**
         * Session of the express
         * @type {Object}
         */
        this.session = request.session;
    }

    /**
     * Gets the cookies of this context's `request` property.
     * @type {Object}
     */
    get cookies() {
        return this.request.cookies;
    }
}

module.exports = ApiContext;
