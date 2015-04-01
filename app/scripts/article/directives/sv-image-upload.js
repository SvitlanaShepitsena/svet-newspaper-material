(function () {
    'use strict';

    angular.module('article')
        .directive('svImageUpload', function () {
            return {
                templateUrl: 'scripts/article/directives/sv-image-upload.html',
                link: function ($scope, el, attrs) {
                    $scope.deleteImage = function () {
                        $scope.$flow.files = [];
                    }
                    $scope.$watchCollection('$flow.files', function (images) {
                        if (!images.length) {
                            return
                        }
                        var lastImg = _.last(images);
                        $scope.$flow.files[0] = lastImg;

                        var file = lastImg;
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file.file);
                        fileReader.onload = function (event) {
                            $scope.ctrl.article.img = event.target.result;
                        };
                    });


                }
            };
        });
})();
