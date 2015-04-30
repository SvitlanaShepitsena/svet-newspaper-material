(function () {
    'use strict';
    angular.module('classified')
        .directive('svClassifiedTabs', function ($state) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-tabs.html',
                controller: function ($scope, $log) {
                    var tabs = [
                            {title: 'all', route: "app.classified.all"},
                            {title: 'community', route: "app.classified.community"},
                            {title: 'job', route: "app.classified.job"},
                            {title: 'lessons', route: "app.classified.lessons"},
                            {title: 'housing', route: "app.classified.housing"},
                            {title: 'sale', route: "app.classified.sale"},
                            {title: 'services', route: "app.classified.services"},
                            {title: 'personal', route: "app.classified.personal"},
                            {title: 'cars', route: "app.classified.cars"}
                        ],
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
