(function () {
    'use strict';
    angular.module('article')
        .directive('svEditorArticlesTabs', function (userAuth, ArticlesServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-editor-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    var articles = ArticlesServ.all();
                    articles.$loaded().then(function () {
                        $scope.articles = processArticles(articles);
                        articles.$watch(function () {
                            $scope.articles = processArticles(articles);
                        });
                    });
                    $scope.isRankChanged = false;
                    $scope.sortableOptions = {
                        update: function (e, ui) {
                            $scope.isRankChanged = true;
                        },
                        axis: 'y'
                    };
                    $scope.saveArticlesRank = function () {
                        ArticlesServ.changeRank($scope.articles).then(function () {
                            $scope.isRankChanged = false;
                            toastr.info('Home Ranking has been changed');
                        })
                    };
                    function processArticles(articles) {
                        var filteredList = _.filter(articles, function (article) {
                            return article.isPublic;
                        });
                        var sortedList = _.sortBy(filteredList, 'newsOrder');
                        return sortedList;
                    }
                }
            };
        });
})();
