(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svOneBusinessAdd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-one-business-add.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
