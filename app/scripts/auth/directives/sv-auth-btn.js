(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function (AuthenticationServ, toastr, userAuth, NoteServ, AgentServ, $state, UserServ, $mdMedia, UserGroupsServ, CurrentUserServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace: true,
                link: function ($scope) {
                    $scope.$watch('user', function (newValue, oldValue) {
                        console.log(newValue);
                    });
                    $scope.isIe = AgentServ.isIe();
                    $scope.loginProvider = function (provider) {
                        AuthenticationServ.authWithProvider(provider).then(function () {
                            if (userAuth.profile && userAuth.profile.role === 'manager') {
                                $state.go('app.manager.dashboard', {uid: userAuth.key})
                            } else {
                                $state.go('app.user.dashboard', {uid: userAuth.profile.userName})
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
