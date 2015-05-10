(function () {
    'use strict';
    angular.module('common')
        .directive('svLumxUsersDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-lumx-users-dropdown.html',
                scope: {
                    btnTitle: '@',
                    actionCounter: '@',
                    userAvatar: '@',
                    userName: '@',
                    userFirstName: '@',
                    userLastName: '@',
                    iconType: '@',
                    iconName: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
