/**
 * безоасно получить значение сквозь вложенные объекты
 * @param {Object} object
 * @param {String|Number|Array} [key] object keys
 * @returns {*} result || null
 */
module.exports = function(object, key){
    var keyTypeof = typeof key;
    var i;
    var iMax;
    var keysList;
    var cache;
    var result;
    var undefined;

    if (object){
        if ((keyTypeof !== 'string')
            && (keyTypeof !== 'number')){
            keysList = key;
            i = 0;
        } else{
            keysList = arguments;
            i = 1;
        }
        iMax = keysList.length - 1;
        for (; i < iMax; i += 1){
            cache = object[keysList[i]];
            if (cache === undefined){
                return null;
            } else{
                object = cache;
            }
        }
        result = object[keysList[i]];
        if (result !== undefined){
            return result;
        }
    }
    return null;
};