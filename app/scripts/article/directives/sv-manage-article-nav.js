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
                    $scope.saveArticle = function (isDraft) {
                        ArticleServ.add($scope.article, isDraft).then(function (uid) {
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
                        toastr.info('You have canceled creating an article');
                    }
                }
            };
        });
})();
