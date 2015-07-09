(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svBanner', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-banner.html',
                scope: {
                    imgUrl: '@',
                    linkUrl: '@',
                    imgAlt: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
