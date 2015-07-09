(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svNewsSectionsNav', function ($mdSidenav) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-news-sections-nav.html',
                link: function ($scope, el, attrs) {
                    $scope.closeSideBar = function () {
                        $mdSidenav('left').close();
                        $mdSidenav('right').close();
                    };
                }
            };
        });
})();
