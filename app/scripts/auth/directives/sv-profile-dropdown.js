(function () {
    'use strict';

    angular.module('auth')
        .directive('svProfileDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
