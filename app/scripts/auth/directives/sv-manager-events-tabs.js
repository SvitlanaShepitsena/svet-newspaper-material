(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerEventsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-events-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var tabs = [
                            {
                                title: 'public-events',
                                content: "scripts/auth/templates/manager-events/manager-public-events-temp.html"
                            },
                            {
                                title: 'network-events',
                                content: "scripts/auth/templates/manager-events/manager-public-events-temp.html"
                            }
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
