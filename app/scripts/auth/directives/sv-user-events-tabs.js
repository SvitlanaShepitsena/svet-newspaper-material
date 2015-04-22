(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserEventsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-events-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
