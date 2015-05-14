(function () {
    'use strict';
    angular.module('auth')
        .directive('svSocialProvider', function ($rootScope, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-social-provider.html',
                scope: {
                    provider: '@',
                    icon: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.icon = $scope.icon || $scope.provider;
                }
            };
        });
})();
