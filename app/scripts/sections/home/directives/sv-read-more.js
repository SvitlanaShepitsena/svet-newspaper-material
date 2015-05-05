(function () {
    'use strict';
    angular.module('home')
        .directive('svReadMore', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-read-more.html',
                scope: {
                    readMore: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
