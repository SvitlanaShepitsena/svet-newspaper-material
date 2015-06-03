(function () {
    'use strict';

    angular.module('articles')
        .directive('svAllArticlesList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/articles/directives/sv-all-articles-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
