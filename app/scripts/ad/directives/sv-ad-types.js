(function () {
    'use strict';

    angular.module('ad')
        .directive('svAdTypes', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-ad-types.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
