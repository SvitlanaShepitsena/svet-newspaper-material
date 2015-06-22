(function () {
    'use strict';

    angular.module('auth.user')
        .directive('svTestDirectiveDel', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-test-directive-del.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
