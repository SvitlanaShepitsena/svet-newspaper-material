(function () {
    'use strict';
    angular.module('sections.home')
        .controller('HomeCtrl', function ($scope, ArticleServ, userAuth) {
            $scope.user = userAuth.profile;

            ArticleServ.allForHome().then(function (svetNews) {
                $scope.appLoaded = true;
                $scope.news = svetNews.news;
                $scope.newsGrid = svetNews.newsGrid;
            });
        });
})();
