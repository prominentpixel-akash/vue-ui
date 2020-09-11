const ApiService = require('../../base/apiService');
/**
 * Lambda service 
 */
class LambdaService extends ApiService {
    constructor(context) {
        super(context);
        this.user = context.user;
    }

    /**
     * Returns all the lambdas
     */
    async getLambda() {
        return [];
    }

    /**
     * Returns lambda with id
     * @param id lambda id
     */
    async getLambdaById(id) {
        const data = [];

        return data;
    }

    /**
     * Create new lambda
     * @param details lambda details object
     */
    async createLambda(details) {
        // TODO: Repository call 
        console.log('New Lambda Created.')
    }

    /**
     * Delete lambda by id
     * @param uuid uuid
     */
    async deleteLambdaById(uuid) {
       console.log('Successfully Deleted.')
    }
}

module.exports = LambdaService;