(function () {
    'use strict';

    angular.module('events')
        .directive('svEventArticleThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-article-thumb.html',
                scope: {},
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
