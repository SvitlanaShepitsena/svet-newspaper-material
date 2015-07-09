(function () {
    'use strict';
    angular.module('events')
        .directive('svOneEventThumb', function ($mdDialog, dt) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event-thumb.html',
                scope: {
                    event: '=',
                    hide: '&dialogHide'
                },
                link: function ($scope, el, attrs) {
                    $scope.quickView = function (domEvt, event) {
                        showModal(event);
                    };
                    console.log($scope.event);
                    var breakPoint = 1;

                    function showModal(event) {
                        dt.vm = event;
                        $mdDialog.show({
                            controller: DialogControllerInfo,
                            templateUrl: 'scripts/events/views/modalContentInfo.html',
                        });
                    }

                    function DialogControllerInfo($scope, $mdDialog, dt) {
                        $scope.event = dt.vm;
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

                    $scope.isDialog = function () {
                        return attrs.dialogHide;
                    };
                }
            };
        });
})();
