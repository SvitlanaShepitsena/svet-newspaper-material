(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthBtn', function (AuthServ,$rootScope) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
                replace:true,
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                    $rootScope.$watch('user', function (newVal, oldVal) {
                        $scope.user = newVal;
                    })

                    ctrl.loginSvetUser = function (provider) {

                        AuthServ.authProvider(provider).then(function (user) {
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
