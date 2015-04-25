(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerUsersTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-users-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
