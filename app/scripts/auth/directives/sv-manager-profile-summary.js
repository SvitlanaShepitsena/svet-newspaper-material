(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerProfileSummary', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-profile-summary.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
