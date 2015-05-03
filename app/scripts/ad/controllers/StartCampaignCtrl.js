(function () {
    'use strict';

    angular.module('ad')
        .controller('StartCampaignCtrl', function ($scope,$stateParams) {
            $scope.id = $stateParams.id;

        });
})();

