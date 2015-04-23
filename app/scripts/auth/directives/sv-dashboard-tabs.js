(function () {
    'use strict';

    angular.module('auth')
        .directive('svDashboardTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-dashboard-tabs.html',
                scope: {},

                link: function ($scope, el, attrs ) {
                    var tabs = [
                            {title: 'my-profile', content: "scripts/auth/templates/user-dashboard/user-profile-temp.html"},
                            {title: 'classified', content: "scripts/auth/templates/user-dashboard/user-classified-temp.html"},
                            {title: 'comments', content: "scripts/auth/templates/user-dashboard/user-comments-temp.html"},
                            {title: 'bookmarks', content: "scripts/auth/templates/user-dashboard/user-bookmarks-temp.html"},
                            {title: 'profile-settings', content: "scripts/auth/templates/user-dashboard/user-profile-settings-temp.html"},
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
