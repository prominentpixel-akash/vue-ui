const ApiService = require('../../base/apiService');
const https = require('https');

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
        return new Promise((resolve, reject) => {
            https.get('https://d39z2rqchf.execute-api.us-east-2.amazonaws.com/default/random-number-generator', (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    console.log(JSON.parse(data));
                    resolve(JSON.parse(data));
                });

            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject(err);
            });
        })
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