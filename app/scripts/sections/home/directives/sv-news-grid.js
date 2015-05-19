(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svNewsGrid', function ($rootScope) {
            return {
                replace: true,
                scope: {
                    news: '=',
                    exclude: '='
                },
                templateUrl: 'scripts/sections/home/directives/sv-news-grid.html',
                link: function ($scope, el, attrs) {
                    $scope.gridNews = _.rest($scope.news, 3);
                    console.log($scope.gridNews);
                }
            };
        });
})();
