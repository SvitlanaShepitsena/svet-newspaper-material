(function () {
    'use strict';

    angular.module('auth')
        .directive('svAllUsersList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-all-users-list.html',
                scope: {},
                controller: function ($scope, UserServ, UserGroupsServ, toastr) {
                    var users = UserServ.all();
                    $scope.users = users;

                    users.$watch(function () {
                        $scope.users = users;
                    });

                    $scope.changeGroup = function (user, group) {
                        UserGroupsServ.toggleUserInGroup(user, group).then(function () {
                            toastr.success('Group Membership has been successfully changed!')
                        })

                    };

                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
