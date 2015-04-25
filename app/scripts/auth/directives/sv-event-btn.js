(function () {
    'use strict';

    angular.module('auth')
        .directive('svEventBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-event-btn.html',
                scope: {
                    btnTitle: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
