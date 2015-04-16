(function () {
    'use strict';

    angular.module('events')
        .directive('svShareBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-share-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
