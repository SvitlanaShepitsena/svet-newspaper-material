(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svAdBannerUpload', function (ImageValidationServ,toastr) {
            return {
                templateUrl: 'scripts/ad/promotion/directives/sv-ad-banner-upload.html',
                link: function ($scope, el, attrs) {
                    $scope.$watchCollection('$flow.files', function (images) {
                        if (!images) {
                            return;
                        }
                        if (!images.length) {
                            return
                        }
                        var lastImg = _.last(images);
                        $scope.$flow.files[0] = lastImg;
                        var file = lastImg;
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file.file);
                        fileReader.onload = function (event) {
                            var img2 = new Image();
                            img2.onload = function () {
                                var size = file.size;
                                var width = img2.width;
                                var height = img2.height;
                                var imageToValidate = {
                                    size: size,
                                    width: width,
                                    height: height
                                };
                                var errMessages = ImageValidationServ.validate(imageToValidate, attrs)
                                if (errMessages.length) {
                                    errMessages.forEach(function (err) {
                                        toastr.error(err);
                                    });
                                    $scope.$flow.files = [];
                                    el.trigger('blur');
                                } else {
                                    $scope.ad.img = event.target.result;
                                }
                            };

                            var uri = event.target.result;
                            img2.src = uri;
                        };
                    });
                }
            };
        });
})();
