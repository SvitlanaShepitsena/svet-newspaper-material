(function () {
    'use strict';
    angular.module('common')
        .directive('svReadMore', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-read-more.html',
                scope: {
                    news: '=',
                    appUrl: '@',
                    readMore: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.topNews = _.first($scope.news);
                }
            };
        });
})();
