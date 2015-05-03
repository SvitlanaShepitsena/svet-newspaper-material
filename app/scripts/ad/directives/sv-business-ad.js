(function () {
    'use strict';

    angular.module('ad')
        .directive('svBusinessAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-business-ad.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
