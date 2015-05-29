(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svAfishaEventsTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-afisha-events-tabs.html',
                link: function ($scope, el, attrs) {
                    var tabs = [],
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
