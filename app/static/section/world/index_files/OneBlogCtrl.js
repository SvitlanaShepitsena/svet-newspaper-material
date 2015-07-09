(function () {
    'use strict';

    angular.module('blogs')
        .controller('OneBlogCtrl', function ($scope, ArticlesServ, $stateParams, userAuth, SvHtmlValidatorServ) {

            $scope.user = userAuth.profile;
            $scope.userKey = userAuth.key;
            var id = $stateParams.blogId;
            console.log(id);
            ArticlesServ.get(id).$loaded().then(function (article) {

                $scope.post = SvHtmlValidatorServ.cleanArticle(article);
            });

        });
})();

