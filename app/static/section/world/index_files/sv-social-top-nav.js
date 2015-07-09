(function () {
    'use strict';
    angular.module('sections.header')
        .directive('svSocialTopNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/header/directives/sv-social-top-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();