(function () {
    'use strict';

    angular.module('auth')
        .directive('svProfileSubheader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-subheader.html',
                scope: {
                    subheaderTitle: '@'

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
