(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserProfileSummary', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-profile-summary.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
