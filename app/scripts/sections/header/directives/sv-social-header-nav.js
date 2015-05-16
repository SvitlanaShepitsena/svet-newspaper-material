(function () {
    'use strict';

    angular.module('sections.header')
        .directive('svSocialHeaderNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/header/directives/sv-social-header-nav.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
