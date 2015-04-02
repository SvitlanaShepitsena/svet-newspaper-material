(function () {

    'use strict';

    angular.module('politics')
        .controller('PoliticsCtrl', function ($scope,$rootScope) {

            var politics = this;
            politics.news = _.filter($rootScope.newsList, function (n) {
                return n.section === 'Политика';

            });
            $scope.$watch('newsList', function (newsObj) {
                if (!newsObj) {
                    return;
                }
                politics.news = _.filter(newsObj, function (n) {
                    return n.section === 'Политика';

                });

            });
        });
})();

