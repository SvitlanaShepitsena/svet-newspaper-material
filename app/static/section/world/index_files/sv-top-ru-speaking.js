(function () {
    'use strict';

    angular.module('sections.about')
        .directive('svTopRuSpeaking', function ($mdDialog) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/about/directives/sv-top-ru-speaking.html',
                scope: {},
                link: function ($scope, el, attrs) {
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
                }
            };
        });
})();
