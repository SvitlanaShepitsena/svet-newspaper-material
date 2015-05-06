(function () {
    'use strict';
    angular.module('auth')
        .directive('svSocialProvider', function (AuthServ, UserServ, $rootScope, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-social-provider.html',
                scope: {
                    provider: '@',
                    icon: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.icon = $scope.icon || $scope.provider;
                    $scope.loginSvetUser = function () {
                        var providerName = $scope.provider.replace('+', '').toLowerCase();
                        console.log('login');
                        AuthServ.authProvider(providerName).then(function (user) {
                            UserServ.saveNewUser(user);
                            $state.go('app.home');
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    }
                }
            };
        });
})();
