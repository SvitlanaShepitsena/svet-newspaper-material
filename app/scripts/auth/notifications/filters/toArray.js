(function () {
    'use strict';

    angular.module('auth.notifications')
        .filter('toArray', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
