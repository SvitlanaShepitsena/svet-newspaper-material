(function () {
    'use strict';
    angular.module('article')
        .directive('svAddComment', function (userAuth, ArticleServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-add-comment.html',
                scope: {
                    key: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    $scope.comment = {
                        body: '',
                        user: $scope.user.fname || $scope.user.login,
                        avatar: $scope.user.avatar || ''
                    }
                    $scope.submitComment = function () {
                        ArticleServ.addComment($scope.key, $scope.comment);
                    };
                }
            };
        });
})();
