(function () {
    'use strict';
    angular.module('sections.contact')
        .controller('ContactCtrl', function ($scope, $mdDialog) {
            $scope.showContactMapModal = function () {
                $mdDialog.show(
                    {
                        controller: ContactModalController,
                        templateUrl: 'scripts/sections/demographics/views/modalContactUsMap.html',
                    }
                );
            };
            function ContactModalController($scope, $mdDialog) {
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

