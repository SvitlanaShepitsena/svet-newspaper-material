(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svSectionNews', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-section-news.html',
                scope: {
                    sectionName: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.news = _.map(_.filter($rootScope.newsList, function (n) {
                        return n.section == $scope.sectionName;
                    }), function (n) {
                        return n;
                    });
                    $scope.$watch('newsList', function (newsObj) {
                        if (!newsObj) {
                            return;
                        }
                        $scope.news = _.filter(newsObj, function (n) {
                            return n.section == $scope.sectionName;
                        });
                    });
                }
            };
        });
})();
