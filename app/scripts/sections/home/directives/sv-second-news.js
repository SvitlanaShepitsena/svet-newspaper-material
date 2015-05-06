(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svSecondNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-second-news.html',
                scope: {
                    secondNews: '='
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
