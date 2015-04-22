(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserDropdownMenu', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-user-dropdown-menu.html',
                scope: {
                    user: '=',
                    logout:'&'

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
