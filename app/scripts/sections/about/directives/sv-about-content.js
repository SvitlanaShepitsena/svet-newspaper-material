(function () {
    'use strict';

    angular.module('sections.about')
        .directive('svAboutContent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/about/directives/sv-about-content.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
