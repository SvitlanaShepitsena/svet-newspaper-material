(function () {
    'use strict';

    angular.module('auth')
        .directive('svPdfSubscription', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-pdf-subscription.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
