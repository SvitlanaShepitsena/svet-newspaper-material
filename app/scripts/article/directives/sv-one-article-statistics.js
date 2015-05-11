(function () {
    'use strict';

    angular.module('article')
        .directive('svOneArticleStatistics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article-statistics.html',
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
