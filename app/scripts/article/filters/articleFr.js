(function () {
    'use strict';

    angular.module('article')
        .filter('articleFr', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
