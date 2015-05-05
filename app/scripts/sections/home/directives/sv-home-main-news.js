(function () {
    'use strict';
    angular.module('home')
        .directive('svHomeMainNews', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-home-main-news.html',
                scope: {},
                bindToController: {
                    nt: '='
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
