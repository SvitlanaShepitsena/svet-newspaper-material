(function () {
    'use strict';
    angular.module('sections.header')
        .directive('svHeaderClassifiedBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/header/directives/sv-header-classified-btn.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
