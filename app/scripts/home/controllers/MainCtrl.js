(function () {
    'use strict';

    angular.module('app')

        .controller('MainCtrl', function (AgentServ, $scope, $timeout, $mdSidenav, $mdMedia) {
            var main = this;

            $scope.toggleLeft = function () {
                $mdSidenav('left').toggle();
            };
            $scope.toggleRight = function () {
                $mdSidenav('right').toggle();
            };

            $scope.$watch(function () {
                return $mdMedia('gt-lg');
            }, function (rightPanelShown) {
                if (rightPanelShown) {
                    main.showShifter = !AgentServ.isIe();
                } else {
                    main.showShifter = true;
                }


            });
            main.shiftAuth = AgentServ.isIe() && !$mdMedia('gt-lg');


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