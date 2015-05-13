(function () {
    'use strict';
    angular.module('sections.home')
        .controller('HomeCtrl', function ($scope, ArticleServ) {
            ArticleServ.allForHome().then(function (svetNews) {
                $scope.appLoaded = true;
                $scope.news = svetNews.news;
                $scope.newsGrid = svetNews.newsGrid;
            });
        });
})();
