(function () {
    'use strict';

    angular.module('auth')
        .directive('svProfileDropdown', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-profile-dropdown.html',
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
