(function () {
    'use strict';
    angular.module('article')
        .directive('svManageArticleNav', function (ArticleServ, toastr, $state, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-manage-article-nav.html',
                scope: {
                    article: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.saveArticle = function (active) {
                        if (active) {
                            $scope.article.isDraft = false;
                        }
                        $scope.article.authorKey = CurrentUserServ.get().key;
                        ArticleServ.add($scope.article).then(function (uid) {
                                $state.go('app.user.author-articles');
                                toastr.success('Статья сохранена в БД');
                            },
                            function (error) {
                                console.log(error);
                            }
                        );
                    }
                    $scope.cancelArticle = function (active) {
                        $state.go('app.user.author-articles');
                        toastr.success('You have canceled creating an article');
                    }
                }
            };
        });
})();
