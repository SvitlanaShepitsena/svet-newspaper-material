(function () {
    'use strict';

    angular.module('home')
        .directive('svWeatherSvet', function (WeatherServ) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-weather-svet.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    WeatherServ.forecast().then(function (forecast) {
                        $scope.forecast = forecast;
                        console.log(forecast);
                        var breakPoint = 1;
                    });
                }
            };
        });
})();
