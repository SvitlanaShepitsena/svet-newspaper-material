(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerProfileNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-manager-profile-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
