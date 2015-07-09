(function () {
    'use strict';
    angular.module('article')
        .directive('svHomePageNews', function ($sce) {
            return {
                templateUrl: 'scripts/article/directives/sv-home-page-news.html',
                scope: {
                    oneNews: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.params = {sectionName: $scope.oneNews.section};
                    $scope.safeParsing = function (html) {
                        return $sce.trustAsHtml(html);
                    };
                }
            };
        });
})();
