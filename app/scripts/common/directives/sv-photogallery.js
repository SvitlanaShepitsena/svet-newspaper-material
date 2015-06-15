(function () {
    'use strict';
    angular.module('common')
        .directive('svPhotogallery', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photogallery.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    //var breakPoint = 1;
                    // Set of Photos
                    $scope.photos = [
                        {src: 'img/gallery/1.jpg', desc: 'Image 01'},
                        {src: 'img/gallery/2.jpg', desc: 'Image 02'},
                        {src: 'img/gallery/3.jpg', desc: 'Image 03'},
                        {src: 'img/gallery/4.jpg', desc: 'Image 04'},
                        {src: 'img/gallery/5.jpg', desc: 'Image 04'},
                    ];
                    // initial image index
                    $scope._Index = 0;
                    // if a current image is the same as requested image
                    $scope.isActive = function (index) {
                        return $scope._Index === index;
                    };
                    // show prev image
                    $scope.showPrev = function () {
                        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
                    };
                    // show next image
                    $scope.showNext = function () {
                        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
                    };
                    // show a certain image
                    $scope.showPhoto = function (index) {
                        $scope._Index = index;
                    };
                }
            };
        });
})();
