(function () {
    'use strict';

    angular.module('home')
        .directive('svSecondNews', function (ColorStateServ) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-second-news.html',
                scope: {},
                bindToController: {
                    secondNews: '='

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                },

                link: function ($scope, el, attrs) {
                    var color = tinycolor('green');

                    //el.css('background-color', ColorStateServ.getColor());

                }
            };
        });
})();