var typesDetection = require('./../typesDetection');
var cycleKeys = require('./../cycle/cycleKeys');
var cycle = require('./../cycle/cycle');

/**
 *
 * @param {Object} object
 * @param {String|...} [property]
 * @return {Object|null} result
 */
module.exports = function (object, property) {
    cycle(arguments, function (property) {
        if (!object.hasOwnProperty(property)) {
            object[property] = {}
        } else if (!typesDetection.isObject(object[property])) {
            object = null;
            return cycleKeys.stopKey;
        }
        object = object[property];
    }, null, null, 1, 1);

    return object;
};