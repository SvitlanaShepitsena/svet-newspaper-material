(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svCustomersDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-customers-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
