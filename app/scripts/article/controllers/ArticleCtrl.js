(function () {
    'use strict';
    angular.module('article')
        .controller('ArticleCtrl', function ($scope, ArticlesServ, $stateParams, userAuth) {
            $scope.user = userAuth.profile
            var id = $stateParams.id;
            ArticlesServ.get(id).$loaded().then(function (article) {
                $scope.article = article;
                console.log(article);
            });
        });
})();

