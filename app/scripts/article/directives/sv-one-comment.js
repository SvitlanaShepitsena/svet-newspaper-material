(function () {
    'use strict';

    angular.module('article')
        .directive('svOneComment', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-comment.html',
                scope: {
                    comment: '=',
                    removeComment: '&'
                },
                link: function ($scope, el, attrs) {
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
