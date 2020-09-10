const moment = require('moment');
const uuid = require('uuid');
const bcrypt = require('bcrypt');


/**
 * General Utility Functions
 */
class GeneralUtility {

    static getDateNow() {
        return moment().toISOString();
    }

    static toDBFormat(momentDate) {
        return moment(momentDate).format('YYYY-MM-DD HH:mm');
    }

    static toDBFormatWithSeconds(momentDate) {
        return moment(momentDate).format('YYYY-MM-DD HH:mm:ss');
    }

    static genUUID() {
        return uuid.v4().toUpperCase();
    }

    static async generateHash(text) {
        console.log('Generating hash for text : ', text);
        return await bcrypt.hash(text, 10)
    }

    static async compareHash(text, textHashToCompare) {
        console.log('Comparing hash and text.');
        const match = await bcrypt.compare(text, textHashToCompare);
        if (match) {
            return true;
        }
        return false;
    }

}

module.exports = GeneralUtility;