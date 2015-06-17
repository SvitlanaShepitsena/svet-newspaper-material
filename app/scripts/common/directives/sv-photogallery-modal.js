(function () {
    'use strict';
    angular.module('common')
        .directive('svPhotogalleryModal', function ($mdDialog, dt) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photogallery-modal.html',
                scope: {
                    event: '=',
                    hide: '&dialogHide'
                },
                link: function ($scope, el, attrs) {
                    $scope.viewGallery = function (domEvt, event) {
                        showModal(event);
                    };
                    function showModal(event) {
                        dt.vm = event;
                        $mdDialog.show({
                            controller: DialogControllerInfo,
                            templateUrl: 'scripts/common/views/photo-gallery-modal.html',
                        });
                    }

                    function DialogControllerInfo($scope, $mdDialog, dt) {
                        $scope.awsBase = 'https://s3-us-west-2.amazonaws.com/svet.com/SVET-';
                        $scope.imgIndex = 1;

                        var maxImg = 67;
                        $scope.event = dt.vm;

                        $scope.nextSvImage = function () {
                            var i = $scope.imgIndex;
                            i++;
                            if (i > maxImg) {
                                i = 1;
                            }
                            $scope.imgIndex = i;
                        };
                        $scope.prevSvImage = function () {
                            var i = $scope.imgIndex;
                            i--;
                            if (i <= 0) {
                                i = maxImg;
                            }
                            $scope.imgIndex = i;
                        };

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
