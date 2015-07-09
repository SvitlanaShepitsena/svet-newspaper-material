(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svSecondNews', function () {
            return {
                templateUrl: 'scripts/sections/home/directives/sv-second-news.html',
                scope: {
                    lowerLimit: '=',
                    higherLimit: '=',
                    news: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.secondaryNews = _.rest(_.take($scope.news, 3));
                }
            };
        });
})();
