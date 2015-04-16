(function () {
    'use strict';

    angular.module('widgets')
        .factory('WeatherServ', function ($q, url) {
            return {
                getSync: function () {

                },
                get: function () {
                    return $q(function (resolve, reject) {

                    });
                }
            };
        });
})();
