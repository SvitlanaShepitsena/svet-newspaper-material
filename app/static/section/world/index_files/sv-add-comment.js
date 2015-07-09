(function () {
    'use strict';
    angular.module('article')
        .directive('svAddComment', function (userAuth, CommentsServ) {
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
                            user: userAuth.key,
                            timestamp: moment().format('x'),
                            avatar: $scope.user.avatar || ''
                        }
                    }
                    $scope.submitComment = function () {
                        CommentsServ.saveComment($scope.articleKey, $scope.comment).then(function (uid) {
                            $scope.comment.body = '';

                        });
                    };
                }
            };
        });
})();
