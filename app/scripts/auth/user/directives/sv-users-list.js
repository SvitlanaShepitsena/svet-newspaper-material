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
                    };
                }
            };
        });
})();
