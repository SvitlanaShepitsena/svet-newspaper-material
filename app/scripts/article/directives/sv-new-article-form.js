(function () {
    'use strict';
    angular.module('article')
        .directive('svNewArticleForm', function (SectionsServ, NewsGeneratorServ, ArticlesServ, SvobodaSaveToDbServ, userAuth, FormattedDateServ, TagsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-new-article-form.html',
                link: function ($scope, el, attrs) {
                    $scope.sections = SectionsServ.all();
                    if ($scope.artId) {
                        //    edit
                        $scope.article = ArticlesServ.get($scope.artId);
                    } else {
                        //    new article
                        $scope.article = {
                            public: false,
                            isTopNews: false,
                            isBlog: $scope.artType === 'blog',
                            img: '',
                            author: userAuth.profile.isEditor() ? 'Alex Etman' : userAuth.profile.userName,
                            section: '',
                            title: '',
                            body: '',
                            tags: ''
                        }
                    }
                    $scope.generateFromRandomNews = function () {
                        SvobodaSaveToDbServ.getRandom().then(function (randomSvobodaArticle) {
                            $scope.article = _.omit(randomSvobodaArticle, '$id');
                            $scope.article.author = userAuth.profile.isEditor() ? 'Alex Etman' : userAuth.profile.userName;
                            $scope.article.tags = $scope.article.tags ? $scope.article.tags.split(',').join(', ') : "";
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
