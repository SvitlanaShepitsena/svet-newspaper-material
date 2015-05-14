(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUsersList', function (UserServ,toastr, avatar) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-users-list.html',
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
