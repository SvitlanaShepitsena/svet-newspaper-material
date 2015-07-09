(function () {
    'use strict';
    angular.module('article')
        .directive('svTopNews', function ($sce) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-top-news.html',
                scope: {
                    news: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.topNews = _.first($scope.news);
                    $scope.safeParsing = function (html) {
                        return $sce.trustAsHtml(html);
                        $scope.htmlReady();
                    };
                }
            };
        });
})();
