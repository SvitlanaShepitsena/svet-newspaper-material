(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserEvents', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-events.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
