(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function (NoteServ, AgentServ, AuthServ, $state, UserServ, $rootScope, $mdMedia, UserGroupsServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace: true,
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.isIe = AgentServ.isIe();
                    $scope.isManager = function () {
                        return UserGroupsServ.isInGroup('manager');
                    };
                    ctrl.loginProvider = function (provider) {
                        AuthServ.authProvider(provider).then(function (user) {
                            if (!user.groups) {
                                UserServ.saveNewUser(user);
                            }
                            $rootScope.user = user;
                            if (UserGroupsServ.isInGroup('manager') || UserGroupsServ.isInGroup('admin')) {
                                $state.go('app.manager.dashboard', {uid: user.id})
                            } else {
                                $state.go('app.user.dashboard', {uid: user.name || user.fname})
                            }
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    };
                    ctrl.logout = function () {
                        $rootScope.user = null;
                        AuthServ.logout();
                        $state.go('app.home')
                    };
                    $scope.$watch(function () {
                        return $mdMedia('gt-md');
                    }, function (size) {
                        ctrl.gtMd = size;
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-sm');
                    }, function (size) {
                        ctrl.gtSm = size;
                    });
                    $scope.$watch(function () {
                        return $mdMedia('sm');
                    }, function (size) {
                        ctrl.sm = size;
                    });
                    $rootScope.$watch('user', function (newVal) {
                        $scope.user = newVal;
                    });
                    $rootScope.$watch('loadingUser', function (newVal) {
                        $scope.loadingUser = newVal;
                    });
                }
            };
        });
})();
