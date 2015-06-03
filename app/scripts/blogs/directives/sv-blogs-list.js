(function () {
    'use strict';

    angular.module('blogs')
        .directive('svBlogsList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/blogs/directives/sv-blogs-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
