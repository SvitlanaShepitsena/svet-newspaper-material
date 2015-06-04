(function () {
    'use strict';

    angular.module('article')
        .filter('authorNameFr', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
