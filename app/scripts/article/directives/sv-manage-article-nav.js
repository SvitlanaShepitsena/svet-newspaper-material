(function () {
    'use strict';
    angular.module('article')
        .directive('svManageArticleNav', function (ArticleServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-manage-article-nav.html',
                scope: {
                    article: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.saveArticle = function () {
                        ArticleServ.add($scope.article).then(function (uid) {
                                $state.go('^');
                                toastr.success('Статья сохранена в БД');
                            },
                            function (error) {
                                console.log(error);
                            }
                        );
                    }
                }
            };
        });
})();
