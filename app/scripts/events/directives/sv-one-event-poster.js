(function () {
    'use strict';
    angular.module('events')
        .directive('svOneEventPoster', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event-poster.html',
                scope: {
                    imgUrl: '@',
                    linkUrl: '@',
                    imgAlt: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
