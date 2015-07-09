(function () {
    'use strict';
    angular.module('sections.header')
        .directive('svHeaderSubscriptionBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/header/directives/sv-header-subscription-btn.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
