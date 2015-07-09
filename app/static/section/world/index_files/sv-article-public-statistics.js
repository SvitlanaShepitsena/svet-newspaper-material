(function () {
    'use strict';
    angular.module('article')
        .directive('svArticlePublicStatistics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-public-statistics.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
