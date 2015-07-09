(function () {
    'use strict';

    angular.module('article')
        .filter('articlePublic', function () {
            return function (list) {
                return _.filter(list, function (item) {
                    return item.isPublic;
                });
            };
        });
})();
