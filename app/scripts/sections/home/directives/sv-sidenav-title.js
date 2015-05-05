(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svSidenavTitle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-sidenav-title.html',
                scope: {
                    title: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
