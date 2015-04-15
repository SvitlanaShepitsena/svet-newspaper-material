(function () {
    'use strict';

    angular.module('auth')
        .directive('svSocialProvider', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-social-provider.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
