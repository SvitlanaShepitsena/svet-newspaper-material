(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthBtn', function (AgentServ, AuthServ, UserServ, $rootScope, $mdMedia) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace: true,
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;


                    ctrl.isIe = AgentServ.isIe();


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

                    $scope.isInGroup = function (group) {

                        var breakPoint=1;
                        if (!$scope.user || !$scope.user.groups) {
                            return false;
                        }
                        var userGroup = $scope.user.groups.indexOf(group);

                        return userGroup > -1;
                    };

                    ctrl.loginProvider = function (provider) {

                        AuthServ.authProvider(provider).then(function (user) {
                            UserServ.saveNewUser(user);
                            $rootScope.user = user;

                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    };

                    ctrl.logout = function () {
                        $rootScope.user = null;
                        AuthServ.logout();

                    };
                }

            };
        });
})();
