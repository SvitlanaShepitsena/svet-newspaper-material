(function () {
    'use strict';
    angular.module('ad.classified')
        .controller('ClassifiedCtrl', function ($scope, ClassifiedServ) {
            $scope.allCls = ClassifiedServ.getAllCls();
            console.log($scope.allCls);
            $scope.runEdit = function () {
                console.log('edit');
            };
        });
})();

