(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerProfileSummary', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-manager-profile-summary.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
