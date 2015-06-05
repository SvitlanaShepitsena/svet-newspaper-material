(function () {
    'use strict';
    angular.module('article')
        .directive('svNewArticleForm', function ($rootScope, SvHtmlValidatorServ, $state, toastr, SectionsServ, NewsGeneratorServ, ArticlesServ, SvobodaSaveToDbServ, userAuth, FormattedDateServ, TagsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-new-article-form.html',
                link: function ($scope, el, attrs) {
                    $scope.$watch('article.title', function (newValue, oldValue) {
                        // Remove in Production

                        $rootScope.title = newValue;
                    });

                    $scope.sections = SectionsServ.all();
                    $scope.user = userAuth.profile;
                    $scope.saveArticle = function (isPublic, formValid) {
                        if (formValid) {
                            var parsedArticle = SvHtmlValidatorServ.cleanArticle($scope.article);
                            ArticlesServ.add(parsedArticle, isPublic).then(function (uid) {
                                    toastr.success('Your changes are successfully saved');
                                },
                                function (error) {
                                    console.log(error);
                                }
                            );
                        }
                    }

                    $scope.cancelArticle = function (active) {
                        $state.go('app.user.author-articles');
                    }
                    if ($scope.artId) {
                        //    edit
                        $scope.article = ArticlesServ.get($scope.artId);
                        console.log($scope.article);
                    } else {
                        //    new article
                        $scope.article = {
                            isBlog: $scope.artType === 'blog',
                            //img: '',
                            ////author: '',
                            author: userAuth.profile.isEditor() ? 'Alexander Etman' : userAuth.profile.userName
                            //section: '',
                            //topic: 'Chicago Community',
                            //title: '',
                            //summary: 'One short sentence, that will appear on an article thumbnail instead of content.',
                            //body: 'dddd',
                            //tags: 'tags',
                            //svetRecommends: false
                        }
                    }
                    $scope.generateFromRandomNews = function () {
                        SvobodaSaveToDbServ.getRandom().then(function (randomSvobodaArticle) {
                            $scope.article = _.omit(randomSvobodaArticle, '$id', 'img');
                            $scope.article.author = userAuth.profile.isEditor() ? 'Alex Etman' : userAuth.profile.userName;
                            $scope.article.tags = $scope.article.tags ? $scope.article.tags.split(',').join(', ') : "";
                            $scope.article.isBlog = $scope.artType === 'blog';
                            $scope.article.topic = 'news';
                            $scope.article.summary = randomSvobodaArticle ? randomSvobodaArticle.contentSnippet : 'Summary';
                            $scope.article.section = 'Politics';
                            $scope.article.svetRecommends = false;
                        });
                    };
                }
            };
        });
})();
