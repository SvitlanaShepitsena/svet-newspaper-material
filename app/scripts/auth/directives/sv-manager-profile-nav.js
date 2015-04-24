(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerProfileNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-profile-nav.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
