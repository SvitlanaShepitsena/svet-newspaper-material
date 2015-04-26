(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerEventsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-events-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
