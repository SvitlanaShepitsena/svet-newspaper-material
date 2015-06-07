(function () {
    'use strict';

    angular.module('auth.user')
        .directive('svChangePassword', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-change-password.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
