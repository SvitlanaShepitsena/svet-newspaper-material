(function () {
    'use strict';

    angular.module('ad')
        .directive('svHomeAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-home-ad.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
