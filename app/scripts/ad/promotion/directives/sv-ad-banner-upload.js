(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svAdBannerUpload', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-ad-banner-upload.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
