(function () {
    'use strict';

    angular.module('common')
        .value('s3', {files: []})
        .directive('svOnePhotoGallery', function (AWSServ, $mdDialog, dt, $timeout) {
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
                        var imgCollection = {
                            images: $scope.images,
                            currentIndex: index
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
                        var delay = 700;

                        $scope.awsBase = 'https://s3-us-west-2.amazonaws.com/kohl/';
                        $scope.imgIndex = dt.vm.currentIndex;

                        $scope.files = dt.vm.images;

                        var maxImg = $scope.files.length - 1;
                        $scope.currentImage = $scope.awsBase + $scope.files[$scope.imgIndex];
                        //$scope.event = dt.vm;

                        $scope.nextSvImage = function () {
                            var i = $scope.imgIndex;
                            i++;
                            if (i > maxImg) {
                                i = 0;
                            }
                            $scope.imgIndex = i;
                            $timeout(function () {
                                $scope.currentImage = $scope.awsBase + $scope.files[$scope.imgIndex];
                            }, delay);
                        };
                        $scope.prevSvImage = function () {
                            var i = $scope.imgIndex;
                            i--;
                            if (i < 0) {
                                i = maxImg;
                            }
                            $scope.imgIndex = i;
                            $timeout(function () {
                                $scope.currentImage = $scope.awsBase + $scope.files[$scope.imgIndex];
                            }, delay);
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
