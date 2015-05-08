(function () {
    'use strict';
    angular.module('article')
        .filter('authorFr', function () {
            return function (list, authorKey) {
                if (!list) {
                    return list;
                }
                return _.filter(list, function (item) {
                    return item.authorKey === authorKey;
                });
            };
        });
})();
