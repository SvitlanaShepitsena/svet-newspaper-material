(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerDashboardTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-dashboard-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
