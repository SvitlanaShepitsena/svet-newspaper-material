(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticle', function (CurrentUserServ) {
            return {
                replace: true,
                scope: {
                    news: '='
                },
                templateUrl: 'scripts/article/directives/sv-one-article.html',
                link: function ($scope, el, attrs) {
                    $scope.user = CurrentUserServ.get();
                }
            };
        });
})();
