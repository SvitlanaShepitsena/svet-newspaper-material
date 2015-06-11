(function () {
    'use strict';

    angular.module('article')
        .directive('svReadTxt', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-read-txt.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
