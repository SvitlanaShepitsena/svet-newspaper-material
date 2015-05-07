var getGlobal = require('../getGlobal');
var cycleKeys = require('./cycleKeys');
var typesDetection = require('../typesDetection');
var getObjectKeys = require('../objects/getObjectKeys');

/**
 *
 * @param {Array|Object|String} cycleable
 * @param {Function} fn
 * @param {*} [fnData]
 * @param {*} [ctx]
 * @param {Number} [step]
 * @param {Number} [start]
 * @returns {Array|Object|String} cycleable
 */
module.exports = function (cycleable, fn, fnData, ctx, step, start) {
    var i,
        propertyName,
        fnResult,
        keys,
        result;
    if (cycleable) {
        //TODO: [dmitry.makhnev] 
        ctx = ctx || getGlobal();
        step = step || 1;
        if (typesDetection.isString(cycleable)) {
            for (i = start || (cycleable.length - 1); i >= 0; i -= step) {
                fnResult = fn.call(ctx, cycleable.charAt(i), i, cycleable, fnData);
                if (fnResult instanceof cycleKeys.StopKey) {
                    break;
                }
            }
        } else if (typesDetection.isCollection(cycleable)) {
            for (i = start || (cycleable.length - 1); i >= 0; i -= step) {
                fnResult = fn.call(ctx, cycleable[i], i, cycleable, fnData);
                if (fnResult instanceof cycleKeys.StopKey) {
                    break;
                }
            }
        } else if (typesDetection.isObject(cycleable)) {
            keys = getObjectKeys(cycleable);
            for (i = start || (keys.length - 1); i >= 0; i -= step) {
                propertyName = keys[i];
                fnResult = fn.call(ctx, cycleable[propertyName], propertyName, cycleable, fnData);
                if (fnResult instanceof cycleKeys.StopKey) {
                    break;
                }
            }
        }
    }
    if (fnResult === cycleKeys.stopObject) {
        result = fnResult.result;
        fnResult.result = null;
        return result;
    }
    return cycleable;
};