(function () {
    'use strict';
    angular.module('article')
        .controller('ArticleCtrl', function ($scope, ArticleServ, $stateParams) {
            var id = $stateParams.id;
            ArticleServ.get(id).$loaded().then(function (article) {
                $scope.article = article;
                console.log(article);
            });
        });
})();

