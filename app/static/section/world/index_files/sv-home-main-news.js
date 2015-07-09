(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svHomeMainNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-home-main-news.html',
                scope: {
                    nt: '='
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
