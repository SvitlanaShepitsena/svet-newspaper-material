(function () {
    'use strict';

    angular.module('article')
        .filter('articleBlogFr', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
