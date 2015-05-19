(function () {
    'use strict';

    angular.module('article')
        .directive('svSubsection', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-subsection.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
