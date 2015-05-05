(function () {
    'use strict';
    angular.module('home')
        .directive('svHeaderClassifiedBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-header-classified-btn.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
