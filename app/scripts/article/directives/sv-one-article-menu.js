(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticleMenu', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article-menu.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
