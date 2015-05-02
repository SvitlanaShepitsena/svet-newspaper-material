(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerUsersTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-manager-users-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    var tabs = [
                            {
                                title: 'all-users',
                                content: "scripts/auth/templates/manager-users/manager-all-users-temp.html"
                            },
                            {
                                title: 'customers',
                                content: "scripts/auth/templates/manager-users/manager-customers-temp.html"
                            },
                            {
                                title: 'authors',
                                content: "scripts/auth/templates/manager-users/manager-authors-temp.html"
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
