(function () {
    'use strict';
    angular.module('article')
        .directive('svImageUpload', function ($rootScope, taSelection) {
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
                                if ($scope.article) {
                                    //$scope.article.img = event.target.result;
                                    runMe(event.target.result);

                                }
                                if ($scope.event) {
                                    $scope.event.img = event.target.result;
                                }
                            };
                        });
                    }
                    ;

                    function runMe(selectedImage) {
                        var selection = $rootScope.lastSelection;
                        var embed = '<img src=' + selectedImage + ' contenteditable="true" allowfullscreen="true" frameborder="0" ng-style="padding:5px" />';
                        taSelection.insertHtml(embed, undefined, selection);
                        $scope.$flow.files = [];

                       el.trigger('blur')
                    }
                }
            };
        });
})();
