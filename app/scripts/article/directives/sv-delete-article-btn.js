(function () {
    'use strict';

    angular.module('article')
        .directive('svDeleteArticleBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-delete-article-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
