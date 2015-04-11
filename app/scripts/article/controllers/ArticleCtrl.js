(function () {
    'use strict';

    angular.module('article')
        .controller('ArticleCtrl', function ($scope, $rootScope, $stateParams) {
            var article = this;
            var id = parseInt($stateParams.id);


            $scope.$watch('newsList', function (list) {
                if (!list) {
                    return;
                }
                article.displayedNews = list[id-1];


            });


        });
})();

