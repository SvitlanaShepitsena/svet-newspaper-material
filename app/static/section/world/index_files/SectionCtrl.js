(function () {
    'use strict';
    angular.module('common')
        .controller('SectionCtrl', function ($scope, $stateParams, svetNews, ArticlesServ) {
            $scope.sectionName = $stateParams.sectionName;
            if (!svetNews.public) {
                ArticlesServ.setHomeNewsLive().then(function () {
                    $scope.newsList = svetNews.public;
                })
            } else {
                $scope.newsList = svetNews.public;
            }
        });
})();

