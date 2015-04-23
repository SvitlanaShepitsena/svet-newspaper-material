(function () {
    'use strict';

    angular.module('auth')
        .directive('svRequestBusinessAccountBtn', function (RequestServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-request-business-account-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {


                }
            };
        });
})();
