(function () {
    'use strict';

    angular.module('common')
        .directive('svLumxUsersDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-lumx-users-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
