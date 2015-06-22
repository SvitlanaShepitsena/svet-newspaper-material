(function () {
    'use strict';

    angular.module('events')
        .directive('svSvEventArticleThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-sv-event-article-thumb.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
