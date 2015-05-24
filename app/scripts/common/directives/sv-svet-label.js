(function () {
    'use strict';

    angular.module('common')
        .directive('svSvetLabel', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-svet-label.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
