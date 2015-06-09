(function () {
    'use strict';
    angular.module('article')
        .controller('ArticleCtrl', function ($scope, ArticlesServ, $stateParams, userAuth) {
            console.log('run here ArticleCtrl.js');
            $scope.user = userAuth.profile;
            $scope.userKey = userAuth.key;
            var id = $stateParams.id;
            ArticlesServ.get(id).$loaded().then(function (article) {
                $scope.article = article;
            });
        });
})();

