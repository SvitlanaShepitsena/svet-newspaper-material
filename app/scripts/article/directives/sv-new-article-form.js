(function () {
    'use strict';
    angular.module('article')
        .directive('svNewArticleForm', function (SectionsServ, NewsGeneratorServ, userAuth, FormattedDateServ, TagsServ, ArticleServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-new-article-form.html',
                link: function ($scope, el, attrs) {
                    $scope.siteSections = SectionsServ.all();
                    if ($scope.artId) {
                        //    edit
                        $scope.article = ArticleServ.get($scope.artId);
                    } else {
                        //    new article
                        $scope.dateMod = '';
                        NewsGeneratorServ.getPoliticalNews(20, true).then(function (realNews) {
                            $scope.article = {
                                public: false,
                                img: realNews.img,
                                isTopNews: false,
                                author: userAuth.profile.userName,
                                section: SectionsServ.getRandomSection($scope.siteSections),
                                title: realNews.title,
                                body: realNews.body,
                                tags: realNews.tags
                            }
                        });
                        //    $scope.article = {
                        //        isDraft: true,
                        //        img: '',
                        //        isTopNews: false,
                        //        author: '',
                        //        section: '',
                        //        title: '',
                        //        body: '',
                        //        tags: ''
                        //    }
                    }
                    $scope.setSection = function (section) {
                        $scope.article.section = section;
                        $scope.$broadcast('close:select', {});
                    }
                }
            };
        });
})();
