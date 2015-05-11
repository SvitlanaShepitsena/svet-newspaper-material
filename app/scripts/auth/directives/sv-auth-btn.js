(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function ($rootScope, NoteServ, AgentServ, AuthServ, $state, UserServ, $mdMedia, UserGroupsServ, CurrentUserServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace: true,
                scope: {},
                link: function ($scope) {
                    $scope.isIe = AgentServ.isIe();
                    $scope.isManager = function () {
                        return UserGroupsServ.isInGroup('manager');
                    };
                    $scope.loginProvider = function (provider) {
                        AuthServ.authProvider(provider).then(function (user) {
                            if (UserGroupsServ.isInGroup('manager')) {
                                $state.go('app.manager.dashboard', {uid: user.id})
                            } else {
                                $state.go('app.user.dashboard', {uid: user.userName})
                            }
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    };
                    $scope.logout = function () {
                        AuthServ.logout();
                        $state.go('app.home');
                        $scope.user = null;
                        $rootScope.$broadcast('logout');

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
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                    });
                }
            };
        });
})();
