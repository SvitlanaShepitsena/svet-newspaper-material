(function () {
    'use strict';

    angular.module('sections.widgets')
        .factory('WeatherServ', function ($q, weather, $firebaseObject) {
            var weatherObj = $firebaseObject(new Firebase(weather));

            function formatDate(date) {
           var at = date.indexOf(' at');
                if (at === -1) {
                    return date;
                }
                return date.substr(0,at);

            }

            function processForecast(forecast) {
                var finalForecast = {};

                finalForecast.curr = {
                    icon: forecast.currently.icon,
                    temp: forecast.currently.apparentTemperature.toFixed(1)
                };
                var daily = forecast.daily.data;
                var dailyFinal = [];

                for (var i = 0; i < daily.length; i++) {
                    var day = daily[i];
                    var averageTemp = ((day.apparentTemperatureMax + day.apparentTemperatureMin) / 2).toFixed(1);
                    var dayFinal = {
                        date:formatDate(moment().add(i+1, 'days').calendar()),
                        icon: day.icon,
                        temp: averageTemp
                    };
                    dailyFinal.push(dayFinal);
                }
                dailyFinal[0].date = 'Tomorrow';

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
