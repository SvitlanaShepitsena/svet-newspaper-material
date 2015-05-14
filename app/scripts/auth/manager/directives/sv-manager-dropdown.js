(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerDropdown', function () {
            return {
                templateUrl: 'scripts/auth/manager/directives/sv-manager-dropdown.html',
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
