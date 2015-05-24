(function () {
    'use strict';

    angular.module('classified')
        .filter('isNew', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
