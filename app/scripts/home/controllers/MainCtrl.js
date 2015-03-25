(function () {
    'use strict';

    angular.module('app')
        .controller('MainCtrl', function ($scope, $timeout, $mdSidenav) {
            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle();
            };
            $scope.toggleRight = function () {
                $mdSidenav('right').toggle();
            };
        })
        .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                $mdSidenav('left').close();
            };
        })
        .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                $mdSidenav('right').close();
            };
        });
})();