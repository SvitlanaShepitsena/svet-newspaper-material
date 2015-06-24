(function () {
    'use strict';
    angular.module('article')
        .directive('svAddComment', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-add-comment.html',
                scope: {
                    articleKey: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    if ($scope.user) {
                        $scope.comment = {
                            body: '',
                            user: $scope.user.fname || $scope.user.login,
                            avatar: $scope.user.avatar || ''
                        }
                    }
                    $scope.submitComment = function () {
                        console.log($scope.articleKey);
                    };
                }
            };
        });
})();
