(function () {
    'use strict';
    angular.module('common')
        .controller('SectionCtrl', function ($scope, $stateParams, ArticleServ) {
            $scope.sectionName = $stateParams.sectionName;
            ArticleServ.allForHome().then(function (svetNews) {
                $scope.newsList = svetNews.newsList;
            })
        });
})();

