(function () {
    'use strict';
    angular.module('article')
        .filter('articleBlogFr', function () {
            return function (list, type) {
                var isBlog = type == 1;
                return _.filter(list, function (item) {
                    return item.isBlog === isBlog;
                });
            };
        });
})();
