(function () {
    'use strict';
    angular.module('article')
        .filter('length', function () {
            return filterLength;
            function filterLength(str, maxLength) {
                if (!str) {
                    return;
                }
                maxLength = maxLength || 100;
                if (str.length <= maxLength) {
                    return str;
                }
                return str.substr(0, maxLength);
            }
        });
})();
