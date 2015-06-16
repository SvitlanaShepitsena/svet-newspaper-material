(function () {
    'use strict';

    angular.module('kohl-2015-report')
        .directive('sv', function () {
            return {
                replace: true,
                templateUrl: 'scripts/kohl-2015-report/directives/sv-.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
