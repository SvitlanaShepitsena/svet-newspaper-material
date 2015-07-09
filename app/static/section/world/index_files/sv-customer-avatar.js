(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svCustomerAvatar', function (avatar) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-customer-avatar.html',
                scope: {
                    customer:'='
                },
                link: function ($scope, el, attrs) {
                    $scope.defaultAvatar=avatar;
                }
            };
        });
})();
