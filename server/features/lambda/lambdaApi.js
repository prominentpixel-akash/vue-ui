const Joi = require('joi');

const ApiSchema = require('../../base/apiSchema');
const LambdaController = require('../lambda/lambdaController');

const getLambda = {
    path: '',
    verb: 'get',
    handler: {
        controller: LambdaController,
        method: 'getLambda',
        arguments: []
    },
    request: {
        query: {
        }
    }
};

const getLambdaById = {
    path: '/:lambdas_id/',
    verb: 'get',
    handler: {
        controller: LambdaController,
        method: 'getLambdaById',
        arguments: [':lambdas_id', ]
    },
    request: {
        params: {
            lambdas_id: Joi.alternatives().try(Joi.number().required(), Joi.string().required())
        }
    }
};

const createLambda = {
    path: '',
    verb: 'post',
    handler: {
        controller: LambdaController,
        method: 'createLambda',
        arguments: ['request:body']
    },
    middleware: {
    },
    request: {
        body: {
            name: Joi.string().required()
        }
    }
};

const deleteLambdaById = {
    path: '/:id/',
    verb: 'delete',
    handler: {
        controller: LambdaController,
        method: 'deleteLambdaById',
        arguments: [':id']
    },
    request: {
        params: {
            id: Joi.alternatives().try(Joi.number().required(), Joi.string().required())
        }
    }
};

const LambdaApi = {
    name: 'Lambda',
    url: '/api/lambda',
    endpoints: [
        getLambda,
        getLambdaById,
        createLambda,
        deleteLambdaById
    ]
};

module.exports = new ApiSchema(LambdaApi);
