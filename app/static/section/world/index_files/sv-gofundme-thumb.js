(function () {
    'use strict';

    angular.module('common')
        .directive('svGofundmeThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-gofundme-thumb.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
