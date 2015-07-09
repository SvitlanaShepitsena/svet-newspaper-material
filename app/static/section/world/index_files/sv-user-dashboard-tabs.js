(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserDashboardTabs', function ($translate, $timeout, $q) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-dashboard-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.selectedIndex = 0;
                }
            };
        });
})();
