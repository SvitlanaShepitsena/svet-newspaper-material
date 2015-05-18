(function () {
    'use strict';
    angular.module('article')
        .directive('svNewArticleForm', function (SectionsServ, NewsGeneratorServ, SvobodaSaveToDbServ, userAuth, FormattedDateServ, TagsServ, ArticleServ) {
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
                        $scope.article = {
                            public: false,
                            isTopNews: false,
                            isBlog: $scope.artType === 'blog',
                            img: '',
                            author: userAuth.profile.userName,
                            section: '',
                            title: '',
                            body: '',
                            tags: ''
                        }
                    }
                    $scope.generateFromRandomNews = function () {
                        SvobodaSaveToDbServ.getRandom().then(function (randomSvobodaArticle) {
                            $scope.article = _.omit(randomSvobodaArticle, '$id');
                            $scope.article.author = userAuth.profile.userName;
                            $scope.article.tags = $scope.article.tags.split(',').join(', ');
                            $scope.article.isBlog = $scope.artType === 'blog';
                        });
                    };
                    $scope.setSection = function (section) {
                        $scope.article.section = section;
                        $scope.$broadcast('close:select', {});
                    }
                }
            };
        });
})();
