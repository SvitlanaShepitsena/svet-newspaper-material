(function () {
    'use strict';

    angular.module('auth')
        .directive('svEventsList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-events-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
