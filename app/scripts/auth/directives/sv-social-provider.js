(function () {
    'use strict';
    angular.module('auth')
        .directive('svSocialProvider', function (AuthServ, UserServ, $rootScope, $state,UserGroupsServ) {
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
                        AuthServ.authProvider(providerName).then(function (user) {
                            if (UserGroupsServ.isInGroup('manager')) {
                                $state.go('app.manager.dashboard', {uid: user.id})
                            } else {
                                $state.go('app.user.dashboard', {uid: user.userName})
                            }
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    }
                }
            };
        });
})();
