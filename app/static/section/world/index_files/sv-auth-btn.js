(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function (userAuth, AuthenticationServ, AgentServ, $state, $mdMedia, toastr) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace: true,
                link: function ($scope) {
                    $scope.isIe = AgentServ.isIe();

                    $scope.$watchCollection(function () {
                        return userAuth.profile;
                    }, function (newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        $scope.user = newValue;
                    });

                    $scope.loginProvider = function (provider) {
                        AuthenticationServ.authWithProvider(provider).then(function () {
                            if (userAuth.profile && userAuth.profile.isManager()) {
                                $state.go('app.manager.users', {uid: userAuth.key})
                            }

                            if (userAuth.profile && userAuth.profile.isCustomer()) {
                                $state.go('app.user.ad.promotion', {uid: userAuth.profile.userName})
                            }
                            if (userAuth.profile && userAuth.profile.isReader()) {
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
