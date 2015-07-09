(function () {
    'use strict';

    angular.module('common')
        .directive('svKohlEventReport', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-kohl-event-report.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
