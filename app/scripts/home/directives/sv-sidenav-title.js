(function () {
    'use strict';

    angular.module('home')
        .directive('svSidenavTitle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-sidenav-title.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
