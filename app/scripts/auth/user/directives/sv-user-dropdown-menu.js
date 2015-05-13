(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserDropdownMenu', function (UserGroupsServ, CurrentUserServ) {
            return {
                templateUrl: 'scripts/auth/user/directives/sv-user-dropdown-menu.html',
                scope: {
                    user: '=',
                    logout: '&'
                },
                link: function ($scope, el, attrs) {
                    //$scope.user = CurrentUserServ.get();
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);
                    };
                }
            };
        });
})();
