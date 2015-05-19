(function () {
    'use strict';
    angular.module('article')
        .directive('svManageArticleNav', function (toastr, $state, userAuth, ArticlesServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-manage-article-nav.html',
                scope: {
                    article: '=',
                    artType:'='
                },
                link: function ($scope, el, attrs) {
                    $scope.saveArticle = function (isPublic) {
                        ArticlesServ.add($scope.article, isPublic).then(function (uid) {
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
                    }
                }
            };
        });
})();
