(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
