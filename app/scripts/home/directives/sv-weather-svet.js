(function () {
    'use strict';

    angular.module('home')
        .directive('svWeatherSvet', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-weather-svet.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
