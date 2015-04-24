(function () {
    'use strict';

    angular.module('home')
        .directive('svHomeLoader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-home-loader.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
