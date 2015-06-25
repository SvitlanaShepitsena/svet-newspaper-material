(function () {
    'use strict';

    angular.module('article')
        .directive('svOneComment', function (userAuth, CommentsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-comment.html',
                scope: {
                    articleKey: '@',
                    comment: '=',
                    removeComment: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.editState = false;

                    $scope.saveCommentChanges = function () {

                        CommentsServ.updateComment($scope.articleKey, $scope.comment).then(function (id) {

                            $scope.editState = false;
                        });
                    };


                    $scope.isEditable = function () {
                        if (!userAuth.profile) {
                            return false;

                        }
                        if (userAuth.profile.isManager()) {
                            return true;
                        }
                        if (userAuth.profile.isEditor()) {
                            return true;
                        }
                        if ($scope.comment.user === userAuth.key) {
                            return true;
                        }
                    };

                }
            };
        });
})();
