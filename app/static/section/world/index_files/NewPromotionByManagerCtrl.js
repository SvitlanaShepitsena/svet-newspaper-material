(function () {
    'use strict';
    angular.module('ad.promotion')
        .controller('NewPromotionByManagerCtrl', function ($scope, $stateParams) {
            $scope.id = $stateParams.id;
        });
})();

