(function () {
    'use strict';

    angular.module('article')
        .directive('svImageInclude', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-image-include.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
