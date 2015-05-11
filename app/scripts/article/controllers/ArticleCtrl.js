(function () {
    'use strict';
    angular.module('article')
        .controller('ArticleCtrl', function ($scope, ArticleServ, $stateParams, CurrentUserServ) {
            $scope.user = CurrentUserServ.get();
            var id = $stateParams.id;
            ArticleServ.get(id).$loaded().then(function (article) {
                $scope.article = article;
                console.log(article);
            });
        });
})();

