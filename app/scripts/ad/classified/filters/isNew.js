(function () {
    'use strict';

    angular.module('ad.classified')
        .filter('isNew', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
