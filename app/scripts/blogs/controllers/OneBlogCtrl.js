(function () {
    'use strict';

    angular.module('blogs')
        .controller('OneBlogCtrl', function ($scope, ArticlesServ, $stateParams, userAuth) {

            $scope.user = userAuth.profile;
            $scope.userKey = userAuth.key;
            var id = $stateParams.blogId;
            console.log(id);
            ArticlesServ.get(id).$loaded().then(function (article) {
                $scope.post = article;
            });

        });
})();

