(function () {
    'use strict';

    angular.module('sections.about')
        .directive('svAboutSvet', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/about/directives/sv-about-svet.html',
                scope: {},
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
