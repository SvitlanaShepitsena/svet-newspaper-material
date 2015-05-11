(function () {
    'use strict';
    angular.module('article')
        .directive('svArticleStatus', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-status.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    console.log('run here sv-article-status.js');
                }
            };
        });
})();
