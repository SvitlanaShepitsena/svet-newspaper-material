(function () {
    'use strict';
    angular.module('common')
        .directive('svSidenavTitle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-sidenav-title.html',
                scope: {
                    iconType: '@',
                    iconName: '@',
                    title: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
