(function () {
    'use strict';

    angular.module('archive')
        .directive('svPdfNewspaperThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/archive/directives/sv-pdf-newspaper-thumb.html',
                scope: {
                    issue: '=',
                    startIssue: '=',
                    index: '='
                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
