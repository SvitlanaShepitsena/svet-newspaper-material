(function () {
    'use strict';

    angular.module('widgets')
        .directive('svWeatherLoader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/widgets/directives/sv-weather-loader.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
