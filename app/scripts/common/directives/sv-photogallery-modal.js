(function () {
    'use strict';
    angular.module('common')
        .value('s3', {files: []})
        .directive('svPhotogalleryModal', function ($mdDialog, dt, $http, s3) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photogallery-modal.html',
                scope: {
                    event: '=',
                    btnSize: '@',
                    hide: '&dialogHide'
                },
                link: function ($scope, el, attrs) {
                    var myRegexp = /<key>([^<])+/gi;
                    var match;
                    var files = [];

                    $http.get('http://svet.com.s3.amazonaws.com').then(function (data) {
                        var myString = data.data;
                        match = myRegexp.exec(myString);
                        while (match != null) {
                            match = myRegexp.exec(myString);
                            if (match) {

                                var fileName = match[0].replace('<Key>', '');
                                files.push(fileName);
                            }
                        }
                        s3.files = files;
                    });

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

                    function DialogControllerInfo($scope, $mdDialog, dt, s3) {
                        //$scope.awsBase = 'https://s3-us-west-2.amazonaws.com/svet.com/';
                        $scope.awsBase = 'https://s3-us-west-2.amazonaws.com/svet.com/events/public/kohl/';
                        $scope.imgIndex = 137;

                        $scope.files = s3.files;

                        var maxImg = 200;
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
