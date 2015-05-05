(function () {
    'use strict';
    angular.module('home')
        .directive('svSecondNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-second-news.html',
                scope: {},
                bindToController: {
                    secondNews: '='
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
