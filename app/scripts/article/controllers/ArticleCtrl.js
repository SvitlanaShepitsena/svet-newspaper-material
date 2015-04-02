(function () {
    'use strict';

    angular.module('article')
        .controller('ArticleCtrl', function ($scope, $rootScope, $stateParams) {
            var article = this;
            var id = parseInt($stateParams.id);



            article.displayNews = $rootScope.newsList[id-1];


        });
})();

