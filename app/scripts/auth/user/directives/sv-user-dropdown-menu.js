(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserDropdownMenu', function () {
            return {
                templateUrl: 'scripts/auth/user/directives/sv-user-dropdown-menu.html',
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
