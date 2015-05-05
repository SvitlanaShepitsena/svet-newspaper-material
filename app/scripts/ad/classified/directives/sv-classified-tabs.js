(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedTabs', function ($state) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-tabs.html',
                controller: function ($scope, $log) {
                    var tabs = [],
                        selected = null,
                        previous = null;
                    $scope.tabs = tabs;
                    $scope.$watch('selectedIndex', function (current, old) {
                        previous = selected
                        selected = tabs[current];
                    });
                },
                link: function ($scope, el, attrs) {
                    $scope.currentRoute = $state.$current.toString();
                    var routes = _.pluck($scope.tabs, 'route');
                    $scope.selectedIndex = routes.indexOf($scope.currentRoute);
                    $scope.switchTab = function () {
                        console.log($scope.selectedIndex);
                        var tabSelected = $scope.tabs[$scope.selectedIndex];
                        console.log(tabSelected);
                        $state.go(tabSelected.route);
                    };
                }
            };
        });
})();
