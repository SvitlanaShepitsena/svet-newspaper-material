(function () {
    'use strict';

    angular.module('events')
        .directive('svEventArticleThumbEn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-article-thumb-en.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
