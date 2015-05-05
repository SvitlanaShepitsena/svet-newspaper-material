(function () {
    'use strict';
    angular.module('home')
        .directive('svWeatherSvet', function (WeatherServ, $translate) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-weather-svet.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.tempConverter = function (temp) {
                        if ($translate.use() === 'ru') {
                            var cel = ((temp - 32) / 1.8).toFixed(1);
                            return cel;
                        }
                        return temp;
                    };
                    $scope.forecastReady = false;
                    WeatherServ.forecast().then(function (forecast) {
                        $scope.forecast = forecast;
                        $scope.forecastReady = true;
                    });
                }
            };
        });
})();
