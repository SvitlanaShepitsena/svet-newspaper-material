(function () {
    'use strict';

    angular.module('custom')
        .directive('svLumxLink', function () {
            return {
                replace: true,
                templateUrl: 'scripts/custom/directives/sv-lumx-link.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
