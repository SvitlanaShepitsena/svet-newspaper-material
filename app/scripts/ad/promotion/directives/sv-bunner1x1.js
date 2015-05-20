(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svBunner1x1', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-bunner-1x1.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
