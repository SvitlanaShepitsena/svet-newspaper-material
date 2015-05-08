(function () {
    'use strict';

    angular.module('article')
        .directive('svOneArticleLink', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article-link.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
