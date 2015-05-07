var getObjectKeys = require('./getObjectKeys');

/**
 *
 * @param {Object} object
 * @return {Number}
 */
module.exports = function (object) {
    return getObjectKeys(object).length;
};