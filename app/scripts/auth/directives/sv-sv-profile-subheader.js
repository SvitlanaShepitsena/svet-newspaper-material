(function () {
    'use strict';

    angular.module('auth')
        .directive('svSvProfileSubheader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-sv-profile-subheader.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
