(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svBanner1x1', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-banner-1x1.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
