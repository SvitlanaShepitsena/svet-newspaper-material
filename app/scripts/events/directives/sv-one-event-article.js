(function () {
    'use strict';

    angular.module('events')
        .directive('svOneEventArticle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event-article.html',
                scope: {},
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
