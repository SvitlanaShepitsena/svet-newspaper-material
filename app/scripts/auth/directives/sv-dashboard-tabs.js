(function () {
    'use strict';
    angular.module('auth')
        .directive('svDashboardTabs', function ($translate, $timeout, $q) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-dashboard-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {

                    $scope.selectedIndex = 0;
                }
            };
        });
})();
