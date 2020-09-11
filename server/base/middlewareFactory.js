const ApplicationError = require('./applicationError');
const ApiContext = require('../base/apiContext');

const __middlewares = {};

//To call middlewares in sequence of priorities, used at line 92.
const priorityMap = {
    Highest: 4,
    High: 3,
    Medium: 2,
    Low: 1,
    Lowest: 0
};
/**
 * Provides a registry and factory for working with `express` middlleware.
 * @static
 * @memberof base
 */
class MiddlewareFactory {

    /**
     * Registers the specified middleware function usind the specified identifier.
     * @param {string} id The identifier under which to store the `middlewareFx`.
     * @param {number} priority priority of the middleware
     * @param {Function} middleware The middleware function to register.
     */
    static register(id, middleware, priority = 0, isClassStructur = false) {
        if (__middlewares[id]) {
            log.warn(`Middleware '${id}' is being overwritten`);
        }

        __middlewares[id] = {
            middleware,
            priority,
            isClassStructur
        };
    }

    /**
     * Creates a middleware function with the specified id, using the specified params.
     * @param {string} id The identifier of the registered middleware
     * @param {any[]} args arguments for middleware.
     * @throws {ApplicationError} If the middleware with requested id hasn't been registered.
     */
    static create(id, args) {
        if (__middlewares[id] === undefined) {
            throw ApplicationError.notImplemented(`Middleware '${id}' is not registered`);
        }

        return {
            handler: __middlewares[id].middleware,
            priority: __middlewares[id].priority,
            isClassStructur: __middlewares[id].isClassStructur,
            args
        };
    }

    /**
     * wrape the middleware function inside an anonymous function
     * @param {boolean} param0.isClassStructur boolean for restructure.
     * @param {function} param0.handler middleware handler function.
     * @param {any[]} param0.args argument array of middleware.
     */
    static wrapMiddleware({isClassStructur, handler, args}) {
        return async (req, res, next) => {
            if (res.headersSent) {
                return;
            }
            try {
                if (isClassStructur) {
                    const context = new ApiContext(req);
                    await (new handler(context, args)).fire(next);
                } else {
                    handler(...args)(req, res, next);
                }
            } catch (err) {
                if (err instanceof ApplicationError) {
                    res.status(err.code).send(err.message);
                    return;
                }
                next(err);
            }
        };
    }
}



MiddlewareFactory.register('validation', require('../middlewares/validator'), priorityMap.Lowest);

module.exports = MiddlewareFactory;
