(function () {
    'use strict';
    angular.module('article')
        .controller('ArticleCtrl', function ($scope, ArticlesServ, $stateParams, userAuth, SvHtmlValidatorServ,$timeout) {
            $scope.user = userAuth.profile;
            $scope.userKey = userAuth.key;
            var id = $stateParams.id;

            ArticlesServ.get(id).$loaded().then(function (article) {
                $scope.article = SvHtmlValidatorServ.cleanArticle(article);
                $timeout(function () {
                    $scope.htmlReady();
                    console.log('ready');
                }, 5000);
            });
        });
})();

