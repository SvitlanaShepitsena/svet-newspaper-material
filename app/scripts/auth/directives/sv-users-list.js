(function () {
    'use strict';

    angular.module('auth')
        .directive('svUsersList', function (UserServ, UserGroupsServ, toastr,avatar) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-users-list.html',
                scope: {
                    groupFilter: '@'
                },
                link: function ($scope, el, attrs) {
                    var users = UserServ.all();
                    $scope.avatar = avatar;

                    users.$watch(function () {
                        $scope.users = users;
                    });

                    $scope.changeUserGroup = function (user, group) {
                        UserGroupsServ.toggleUserInGroup(user, group).then(function () {
                            toastr.success('Group Membership has been successfully changed!')
                        });
                    };
                }
            };
        });
})();
