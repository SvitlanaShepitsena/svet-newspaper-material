(function () {
    'use strict';
    angular.module('ad.classified')
        .controller('OneClassifiedCtrl', function ($scope, $stateParams,ClassifiedServ) {
            var section = $stateParams.clSection;
            var id = $stateParams.clId;
            $scope.cl=ClassifiedServ.getClByKey(id);


        });
})();

