(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerDropdown', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-manager-dropdown.html',
                scope: {
                    user: '=',
                    logout: '&'
                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
