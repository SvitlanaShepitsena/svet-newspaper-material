(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUsersList', function (toastr, avatar, UsersServ, ProfileServ) {
            return {
                replace: true,
                require:'^svManagerUsersTabs',
                templateUrl: 'scripts/auth/user/directives/sv-users-list.html',
                scope: {
                    groupFilter: '@'
                },
                link: function ($scope, el, attrs,ctrl) {
                    console.log(ctrl);


                    $scope.avatar = avatar;
                    $scope.users = UsersServ.allUsersList();
                    $scope.users.$loaded(function () {
                        var count= _.countBy($scope.users, function (user) {
                            return user.profile.role;
                        });

                    })


                    $scope.changeUserRole= function (user, group) {
                        ProfileServ.changeUserRole(user,group).then(function () {
                            toastr.info('role has been changed');
                        })
                    };
                }
            };
        });
})();
