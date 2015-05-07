(function () {
    'use strict';
    angular.module('article')
        .directive('svImageUpload', function () {
            return {
                templateUrl: 'scripts/article/directives/sv-image-upload.html',
                link: function ($scope, el, attrs) {
                    if (!$scope.$parent.ad) {
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
                                $scope.article.img = event.target.result;
                            };
                        });
                    }
                    ;
                }
            };
        });
})();
