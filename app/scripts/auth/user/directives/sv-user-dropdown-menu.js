(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserDropdownMenu', function (user, UserGroupsServ, CurrentUserServ) {
            return {
                templateUrl: 'scripts/auth/user/directives/sv-user-dropdown-menu.html',
                scope: {
                    logout: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = user;

                    $scope.isInGroup = function (group) {

                        if (group === 'reader') {
                            if (user) {
                                return true;
                            }
                        }
                        return user.role && user.role===group;
                    };
                }
            };
        });
})();
