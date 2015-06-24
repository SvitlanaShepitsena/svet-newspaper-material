(function () {
    'use strict';

    angular.module('sections.about')
        .directive('svAboutTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/about/directives/sv-about-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
