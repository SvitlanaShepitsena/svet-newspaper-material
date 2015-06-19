(function () {
    'use strict';

    angular.module('events')
        .directive('svKohlPdfReport', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-kohl-pdf-report.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
