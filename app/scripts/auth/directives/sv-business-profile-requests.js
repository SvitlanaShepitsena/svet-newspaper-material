(function () {
    'use strict';

    angular.module('auth')
        .directive('svBusinessProfileRequests', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-business-profile-requests.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
