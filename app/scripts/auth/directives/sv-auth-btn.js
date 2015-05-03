(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthBtn', function (NoteServ, AgentServ, AuthServ, $state, UserServ, $mdMedia, UserGroupsServ, CurrentUserServ) {
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
                            CurrentUserServ.setUser(user).then(function (user) {

                                if (!user.groups) {
                                    UserServ.saveNewUser(user);
                                }
                                if (UserGroupsServ.isInGroup('manager')) {
                                    $state.go('app.manager.dashboard', {uid: user.id})
                                } else {
                                    $state.go('app.user.dashboard', {uid: user.userName})
                                }
                            });
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    };
                    ctrl.logout = function () {
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

                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;

                    });
                }
            };
        });
})();
