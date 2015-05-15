(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUsersList', function (toastr, avatar, UsersServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-users-list.html',
                scope: {
                    groupFilter: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.avatar = avatar;
                    $scope.users = UsersServ.allUsersList();
                    console.log($scope.users);
                    $scope.changeUserGroup = function (user, group) {
                    };
                }
            };
        });
})();
