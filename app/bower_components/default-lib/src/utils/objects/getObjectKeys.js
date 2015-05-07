var getObjectKeys;
if (Object.keys) {
    /**
     *
     * @param {Object} object
     * @return {Array}
     */
    getObjectKeys = function (object) {
        return Object.keys(object);
    };
} else {
    /**
     *
     * @param {Object} object
     * @return {Array}
     */
    getObjectKeys = function (object) {
        var p,
            keys = [];

        for (p in object) {
            if (object.hasOwnProperty(p)) {
                keys.push(p);
            }
        }

        return keys;
    };
}

module.exports = getObjectKeys;