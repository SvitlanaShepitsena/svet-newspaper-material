(function () {
    'use strict';

    angular.module('article')
        .directive('svMainNewsStatus', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-main-news-status.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
