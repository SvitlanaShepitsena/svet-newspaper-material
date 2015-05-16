(function () {
    'use strict';

    angular.module('sections.header')
        .directive('svSocialHeaderNav', function () {
            return {
                templateUrl: 'scripts/sections/header/directives/sv-social-header-nav.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    console.log('run here sv-social-header-nav.js');
                }
            };
        });
})();
