(function () {
    'use strict';
    angular.module('classified')
        .controller('ClassifiedCtrl', function ($scope, ClassifiedServ) {
            $scope.allCls = ClassifiedServ.getAllCls();


            $scope.runEdit = function () {
                console.log('edit');
            };
        });
})();

