(function () {
    'use strict';

    angular.module('article')
        .directive('svSvetPad', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-svet-pad.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
