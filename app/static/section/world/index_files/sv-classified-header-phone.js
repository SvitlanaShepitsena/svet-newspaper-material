(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svClassifiedHeaderPhone', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-classified-header-phone.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
