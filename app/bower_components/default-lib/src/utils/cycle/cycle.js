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
 * @returns {*}
 */
module.exports = function(cycleable, fn, fnData, ctx, step, start){
    var i,
        iMax,
        propertyName,
        fnResult,
        keys,
        result;
    if (cycleable){
        ctx = ctx || getGlobal();
        step = step || 1;
        i = start || 0;
        if (typesDetection.isString(cycleable)) {
            for (iMax = cycleable.length; i < iMax; i += step) {
                fnResult = fn.call(ctx, cycleable.charAt(i), i, cycleable, fnData);
                if (fnResult instanceof cycleKeys.StopKey) {
                    break;
                }
            }
        } else if (typesDetection.isCollection(cycleable)) {
            for (iMax = cycleable.length; i < iMax; i += step) {
                fnResult = fn.call(ctx, cycleable[i], i, cycleable, fnData);
                if (fnResult instanceof cycleKeys.StopKey) {
                    break;
                }
            }
        } else if (typesDetection.isObject(cycleable)){
            //if simple rules use for in
            if ((i === 0) && (step === 1)) {
                for (propertyName in cycleable) {
                    if (cycleable.hasOwnProperty(propertyName)) {
                        fnResult = fn.call(ctx, cycleable[propertyName], propertyName, cycleable, fnData);
                        if (fnResult instanceof cycleKeys.StopKey) {
                            break;
                        }
                    }
                }
            } else {
                keys = getObjectKeys(cycleable);
                for (iMax = keys.length; i < iMax; i += step) {
                    propertyName = keys[i];
                    fnResult = fn.call(ctx, cycleable[propertyName], propertyName, cycleable, fnData);
                    if (fnResult instanceof cycleKeys.StopKey) {
                        break;
                    }
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

