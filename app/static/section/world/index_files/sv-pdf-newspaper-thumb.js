(function () {
    'use strict';
    angular.module('sections.archive')
        .directive('svPdfNewspaperThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/archive/directives/sv-pdf-newspaper-thumb.html',
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
