(function () {
    'use strict';

    angular.module('auth')
        .directive('svSubscriptionDialog', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-subscription-dialog.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
