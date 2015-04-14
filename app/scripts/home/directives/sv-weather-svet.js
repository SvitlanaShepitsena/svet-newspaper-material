(function () {
    'use strict';

    angular.module('home')
        .directive('svWeatherSvet', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-weather-svet.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
