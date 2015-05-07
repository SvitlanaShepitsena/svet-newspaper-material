var _global = this.global
    || (function () {
        return window;
    } ());

/**
 *
 * @return {Window|Object}
 */
module.exports = function () {
    return _global;
};