(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerDashboardTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-dashboard-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs ) {
                    var tabs = [
                            {title: 'my-profile', content: "scripts/auth/templates/manager-dashboard/manager-profile-temp.html"},
                            {title: 'bookmarks', content: "scripts/auth/templates/manager-dashboard/manager-bookmarks-temp.html"},
                            {title: 'profile-settings', content: "scripts/auth/templates/manager-dashboard/manager-profile-settings-temp.html"},
                        ],
                        selected = null,
                        previous = null;
                    $scope.tabs = tabs;
                    $scope.selectedIndex = 0;
                    $scope.$watch('selectedIndex', function (current, old) {
                        previous = selected;
                        selected = tabs[current];
                    });

                }
            };
        });
})();
