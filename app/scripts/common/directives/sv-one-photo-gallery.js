(function () {
    'use strict';

    angular.module('common')
        .directive('svOnePhotoGallery', function (AWSServ, $mdDialog,dt) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-one-photo-gallery.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.bucketUrl = "https://s3-us-west-2.amazonaws.com/kohl/";
                    AWSServ.getImages('kohl').then(function (files) {
                        $scope.images = files;

                    });

                    $scope.showGalleryModal = function (index) {
                       var imgCollection={
                           images: $scope.images,
                           currentIndex:index
                       }
                        showModal(imgCollection);
                    };

                    function showModal(collection) {
                        dt.vm = collection;
                        $mdDialog.show({
                            controller: DialogControllerInfo,
                            templateUrl: 'scripts/common/views/photo-gallery-modal.html',
                        });
                    }

                    function DialogControllerInfo($scope, $mdDialog, dt, s3) {
                        $scope.awsBase = 'https://s3-us-west-2.amazonaws.com/kohl/';
                        $scope.imgIndex = dt.vm.currentIndex;

                        $scope.files = dt.vm.images;

                        var maxImg = $scope.files.length-1;
                        //$scope.event = dt.vm;

                        $scope.nextSvImage = function () {
                            var i = $scope.imgIndex;
                            i++;
                            if (i > maxImg) {
                                i = 0;
                            }
                            $scope.imgIndex = i;
                        };
                        $scope.prevSvImage = function () {
                            var i = $scope.imgIndex;
                            i--;
                            if (i < 0) {
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
