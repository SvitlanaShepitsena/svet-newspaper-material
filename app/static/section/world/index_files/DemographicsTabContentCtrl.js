(function () {
    'use strict';

    angular.module('sections.about')
        .controller('DemographicsTabContentCtrl', function ($scope, $mdDialog) {
            $scope.showDemographicsMapModal = function () {
                $mdDialog.show(
                    {
                        controller: DemographicsModalController,
                        templateUrl: 'scripts/sections/demographics/views/modalDemographicsMap.html',
                    }
                );
            };
            function DemographicsModalController($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            }
        });
})();

