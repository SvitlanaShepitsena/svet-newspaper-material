(function () {
    'use strict';

    angular.module('article')
        .directive('svSvDeleteArticleBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-sv-delete-article-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
