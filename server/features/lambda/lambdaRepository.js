const BaseRepository = require('../../base/baseRepository');

/**
 * Lambda Repository 
 */
class LambdaRepository extends BaseRepository {
    constructor(context) {
        super(context);
    }
}

module.exports = LambdaRepository;