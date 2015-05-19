(function () {
    'use strict';
    angular.module('sections.home')
        .controller('HomeCtrl', function ($scope, userAuth, svetNews) {
            $scope.user = userAuth.profile;
            $scope.news = svetNews.public;
        });
})();
