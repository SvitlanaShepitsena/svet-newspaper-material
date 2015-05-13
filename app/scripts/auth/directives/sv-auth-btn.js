(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function (user, AuthenticationServ, toastr, NoteServ, AgentServ, $state, UserServ, $mdMedia, UserGroupsServ, CurrentUserServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace: true,
                scope: {},
                link: function ($scope) {
                    $scope.isIe = AgentServ.isIe();
                    $scope.isManager = function () {
                        return UserGroupsServ.isInGroup('manager');
                    };
                    $scope.user = user;

                    $scope.loginProvider = function (provider) {
                        AuthenticationServ.authWithProvider(provider).then(function () {
                            if (user.profile.role && user.profile.role==='manager') {

                                $state.go('app.manager.dashboard', {uid: user.key})
                            } else {
                                $state.go('app.user.dashboard', {uid: user.profile.userName})
                            }
                        });
                    };
                    $scope.logout = function () {
                        AuthenticationServ.logout();
                        $state.go('app.home');
                    };
                    $scope.$watch(function () {
                        return $mdMedia('gt-md');
                    }, function (size) {
                        $scope.gtMd = size;
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-sm');
                    }, function (size) {
                        $scope.gtSm = size;
                    });
                    $scope.$watch(function () {
                        return $mdMedia('sm');
                    }, function (size) {
                        $scope.sm = size;
                    });
                }
            };
        });
})();
