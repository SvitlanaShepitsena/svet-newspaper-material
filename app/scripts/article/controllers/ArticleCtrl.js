(function () {
    'use strict';
    angular.module('article')
        .controller('ArticleCtrl', function ($scope, ArticleServ, $stateParams) {
            var id = parseInt($stateParams.id);

            ArticleServ.allForHome().then(function (svetNews) {
                $scope.displayedNews = svetNews.newsList[id - 1];
            });
        });
})();

