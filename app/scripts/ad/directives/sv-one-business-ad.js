(function () {
    'use strict';

    angular.module('ad')
        .directive('svOneBusinessAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-one-business-ad.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
