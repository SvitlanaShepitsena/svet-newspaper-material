(function () {
    'use strict';
    angular.module('article')
        .directive('svAritclePublicStatistics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-aritcle-public-statistics.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
