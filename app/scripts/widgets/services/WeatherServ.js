(function () {
    'use strict';

    angular.module('widgets')
        .factory('WeatherServ', function ($q, weather, $firebaseObject) {
            var weatherObj = $firebaseObject(new Firebase(weather));

            function processForecast(forecast) {
                var finalForecast = {};

                finalForecast.curr = {
                    icon: forecast.currently.icon,
                    temp: forecast.currently.apparentTemperature
                };
                var daily = forecast.daily.data;
                var dailyFinal = [];

                for (var i = 0; i < daily.length; i++) {
                    var day = daily[i];
                    var averageTemp = Math.floor((day.apparentTemperatureMax + day.apparentTemperatureMin) / 2);
                    var dayFinal = {
                        date:moment().add(i+1, 'days').calendar(),
                        icon: day.icon,
                        temp: averageTemp
                    };
                    dailyFinal.push(dayFinal);
                }
                finalForecast.daily = dailyFinal;

                return finalForecast;
            }

            return {

                forecast: function () {
                    return $q(function (resolve, reject) {
                        weatherObj.$loaded().then(function (forecatData) {
                            var finalForecast = processForecast(forecatData);
                            resolve(finalForecast);
                        });

                    });
                }
            };
        });
})();
