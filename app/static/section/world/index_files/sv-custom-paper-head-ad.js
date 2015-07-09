(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svCustomPaperHeadAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-custom-paper-head-ad.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
