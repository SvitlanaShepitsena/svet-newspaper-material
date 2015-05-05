(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserDashboardTabs', function ($translate, $timeout, $q) {
            return {
                replace: true,
                templateUrl: 'sv-user-dashboard-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.selectedIndex = 0;
                }
            };
        });
})();
