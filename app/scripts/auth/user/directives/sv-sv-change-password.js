(function () {
    'use strict';

    angular.module('auth.user')
        .directive('svSvChangePassword', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-sv-change-password.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
