(function () {
    'use strict';

    angular.module('auth')
        .controller('ManagerUsersCtrl', function ($scope, UserServ, UserGroupsServ,toastr) {
            var users = UserServ.all();
            $scope.users = users;

            users.$watch(function () {
                $scope.users = users;
            });

            $scope.changeGroup = function (user, group) {
                UserGroupsServ.toggleUserInGroup(user,group).then(function () {
                    toastr.success('Group Membership has been successfully changed!')
                })

            };


        });
})();

