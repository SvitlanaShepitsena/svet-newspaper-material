(function () {
    'use strict';
    angular.module('article')
        .controller('OneBlogCtrl', function ($scope, $stateParams,BlogServ) {
            var postId = $stateParams.postId;
            var postObj=BlogServ.getPost(postId);

            postObj.$bindTo($scope,'post').then(function () {
                console.log($scope.post);
            });
        });
})();

