(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticle', function () {
            return {
                replace: true,
                scope: {
                    news: '='
                },
                templateUrl: 'scripts/article/directives/sv-one-article.html',
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
