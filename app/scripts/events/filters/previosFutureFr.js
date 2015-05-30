(function () {
    'use strict';

    angular.module('events')
        .filter('previosFutureFr', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
