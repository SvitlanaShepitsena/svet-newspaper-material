(function () {
    'use strict';
    angular.module('article')
        .directive('svImageUpload', function (ImageValidationServ, $rootScope, taSelection, toastr, svTextAngular, $timeout) {
            return {
                templateUrl: 'scripts/article/directives/sv-image-upload.html',
                link: function ($scope, el, attrs) {
                    var svetPad = el.find('#svetPad');
                    $scope.$watch(function () {
                        return svTextAngular.selected;
                    }, function (newValue, oldValue) {
                        if (newValue === false) {
                            $timeout(function () {
                                $scope.svTextAngularelected = newValue;
                            }, 100)
                        } else {
                            $scope.svTextAngularelected = newValue;
                        }
                    });
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
                                    var uri = event.target.result;
                                    var img = new Image();
                                    img.src = uri;
                                    img.onload = function () {
                                        var size = file.size;
                                        var width = img.width;
                                        var height = img.height;
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
                                            runMe(event.target.result);
                                        }
                                    };
                                    //$scope.article.img = event.target.result;
                                }
                                if ($scope.event) {
                                    $scope.event.img = event.target.result;
                                }
                            };
                        });
                    }
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
