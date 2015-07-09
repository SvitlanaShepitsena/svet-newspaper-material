(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svCustomersDropdown', function (avatar) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-customers-dropdown.html',
                scope: {
                    customers: '=',
                    selectedCustomer: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.defaultAvatar=avatar;
                    $scope.setSelectedCustomer = function (customer) {
                        $scope.selectedCustomer = customer;
                        console.log('run here sv-customers-dropdown.js');

                    };

                }
            };
        });
})();
