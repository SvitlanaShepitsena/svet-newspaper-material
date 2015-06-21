(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svCustomerAvatar', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-customer-avatar.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
