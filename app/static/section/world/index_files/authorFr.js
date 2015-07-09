(function () {
    'use strict';
    angular.module('article')
        .filter('authorFr', function (userAuth) {
            return function (list, authorKey) {
                if (!list) {
                    return list;
                }
                if (!authorKey) {
                    authorKey = userAuth.key;
                }
                return _.filter(list, function (item) {
                    return item.authorKey === authorKey;
                });
            };
        });
})();
