(function () {
    'use strict';
    angular.module('ad.promotion')
        .controller('StartCampaignCtrl', function ($scope, $stateParams) {
            $scope.id = $stateParams.id;
        });
})();

