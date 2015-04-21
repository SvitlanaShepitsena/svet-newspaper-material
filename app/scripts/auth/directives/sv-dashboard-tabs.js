(function () {
    'use strict';

    angular.module('auth')
        .directive('svDashboardTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-dashboard-tabs.html',
                scope: {},

                link: function ($scope, el, attrs) {
                    var tabs = [
                            {title: 'comments', content: "Here are my discussions"},
                            {title: 'bookmarks', content: "Here are some interesting articles saved."},
                            {title: 'statistics', content: "Here is going to be my profile statistics"}
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
