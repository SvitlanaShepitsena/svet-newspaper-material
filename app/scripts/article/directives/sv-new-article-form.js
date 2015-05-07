(function () {
    'use strict';
    angular.module('article')
        .directive('svNewArticleForm', function (SectionsServ, NewsGeneratorServ, FormattedDateServ, TagsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-new-article-form.html',
                link: function ($scope, el, attrs) {
                    $scope.siteSections = SectionsServ.all();
                    $scope.dateMod = '';
                    NewsGeneratorServ.getPoliticalNews(20, true).then(function (realNews) {
                        $scope.article = {
                            isDraft: true,
                            img: realNews.img,
                            isTopNews: false,
                            author: realNews.author || 'Alex Author',
                            date: realNews.publishedDate,
                            section: SectionsServ.getRandomSection($scope.siteSections),
                            title: realNews.title,
                            body: realNews.body,
                            tags: realNews.tags
                        }
                    });
                    $scope.setSection = function (section) {
                        $scope.article.section = section;
                        $scope.$broadcast('close:select', {});
                    }
                }
            };
        });
})();
