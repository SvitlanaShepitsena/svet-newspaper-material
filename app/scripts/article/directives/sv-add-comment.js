(function () {
    'use strict';
    angular.module('article')
        .directive('svAddComment', function (CurrentUserServ, ArticleServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-add-comment.html',
                scope: {
                    key: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.user = CurrentUserServ.get();
                    $scope.comment = {
                        body: '',
                        user: $scope.user.fname || $scope.user.login,
                        avatar: $scope.user.avatar || ''
                    }
                    $rootScope.$watch('user', function (newsObj) {
                        $scope.user = newsObj;
                    });
                    $scope.submitComment = function () {
                        ArticleServ.addComment($scope.key, $scope.comment);
                    };
                }
            };
        });
})();
