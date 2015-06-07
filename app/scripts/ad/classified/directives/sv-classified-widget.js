(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedWidget', function (ClassifiedServ, classified, $interval, classifiedInterval, $mdDialog) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-widget.html',
                scope: {
                    isHome: '='
                },
                link: function ($scope, el, attrs) {
                    ClassifiedServ.bindClassifiedsLive().then(function () {
                        $scope.cls = classified.list;
                        $scope.currentClassifiedIndex = $scope.cls.length - 1;
                        $interval(function () {
                            var index = $scope.currentClassifiedIndex;
                            index--;
                            index = index < 0 ? $scope.cls.length - 1 : index;
                            $scope.currentClassifiedIndex = index;
                        }, classifiedInterval);
                    });
                    $scope.showClassifiedModal = function () {
                        $mdDialog.show(
                            {
                                controller: ClassifiedModalController,
                                templateUrl: 'scripts/ad/classified/views/modalClassified.html',
                            }
                        );
                    };
                    function ClassifiedModalController($scope, $mdDialog, viewModalConst) {
                        $scope.cl = viewModalConst.cl;
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
