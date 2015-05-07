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
                        console.log(realNews);
                        $scope.article = {
                            isDraft: true,
                            img: realNews.img,
                            isTopNews: false,
                            author: realNews.author || 'Alex Author',
                            date: FormattedDateServ.getFormattedDate(),
                            section: SectionsServ.getRandomSection($scope.siteSections),
                            title: realNews.title,
                            body: realNews.content,
                            tags: TagsServ.getRandomTags()
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
