(function () {
    'use strict';

    angular.module('article')
        .directive('svSvOneArticleMenu', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-sv-one-article-menu.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
