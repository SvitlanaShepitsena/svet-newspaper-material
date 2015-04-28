(function () {
    'use strict';

    angular.module('auth')
        .directive('svProfileType', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-type.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
