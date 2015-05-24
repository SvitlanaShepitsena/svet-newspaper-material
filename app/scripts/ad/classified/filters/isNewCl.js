(function () {
    'use strict';

    angular.module('ad.classified')
        .filter('isNewCl', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
