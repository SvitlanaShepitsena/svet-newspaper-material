(function () {
    'use strict';

    angular.module('auth')
        .directive('svBusinessAccountRequests', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-business-account-requests.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
