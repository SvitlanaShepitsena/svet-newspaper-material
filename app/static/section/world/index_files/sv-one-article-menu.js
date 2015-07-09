(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticleMenu', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article-menu.html',
                scope: {
                    news:'='
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth;
                    $scope.user.key = userAuth.key;

                }
            };
        });
})();
