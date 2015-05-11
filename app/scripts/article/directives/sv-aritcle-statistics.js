(function () {
    'use strict';

    angular.module('article')
        .directive('svAritcleStatistics', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-aritcle-statistics.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
