(function () {
    'use strict';

    angular.module('events')
        .directive('svTestDirectiveDel', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-test-directive-del.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
