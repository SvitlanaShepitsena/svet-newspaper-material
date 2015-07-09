(function () {
    'use strict';
    angular.module('article')
        .directive('svEditArticleBtn', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-edit-article-btn.html',
                scope: {
                    article: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
