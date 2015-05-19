(function () {
    'use strict';
    angular.module('article')
        .directive('svTopNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-top-news.html',
                scope: {
                    news: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.topNews= _.first($scope.news);
                }
            };
        });
})();
