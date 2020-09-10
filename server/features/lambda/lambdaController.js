const path = require('path');
const fs = require('fs');

const ApiController = require('../../base/apiController');
const LambdaService = require('../lambda/lambdaService');

class LambdaController extends ApiController {
    constructor(context) {
        super(context);
        this.context = context;
        this.response = context.response;
        this.lambdaService = new LambdaService(context);
    }
    
    /**
     * Returns all the lambdas
     */
    async getLambda() {
        const data = await this.lambdaService.getLambda();
        this.respondOk({
            data: data,
            totalCount: data.length,
            message: 'Successfully fetched.'
        });
    }

    /**
     * Returns lambda with id
     * @param id lambda id
     */
    async getLambdaById(beneficiaries_id, installment_no) {
        const data = await this.lambdaService.getLambdaById(beneficiaries_id, installment_no);
        this.respondOk({
            data: data,
            message: 'Successfully fetched.'
        });
    }

    /**
     * Create new lambda
     * @param details lambda details object
     */
    async createLambda(details) {
        const data = await this.lambdaService.createLambda(details);
        this.respondOk({
            message: 'Successfully created.',
            data: data
        });
    }

    /**
     * Delete lambda by id
     * @param uuid uuid
     */
    async deleteLambdaById(id, installment_uuid) {
        await this.lambdaService.deleteLambdaById(id, installment_uuid);
        this.respondOk({
            message: 'Successfully deleted.'
        });
    }
}

module.exports = LambdaController;
