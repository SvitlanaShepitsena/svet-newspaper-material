(function () {
    'use strict';
    angular.module('common')
        .directive('svPhotogallery', function ($rootScope,AgentServ) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photogallery.html',
                scope: {},
                controller: function ($scope) {
                    this.moveArrows = function (height) {
                        var half = Math.round(height / 2);
                        $scope.shift = half;
                    };
                },
                link: function ($scope, el, attrs) {
                    //var breakPoint = 1;
                    $scope.isIe=AgentServ.isIe();
                    // Set of Photos
                    $scope.photos = [
                        {src: 'img/gallery/1.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/2.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/3.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/4.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/5.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/6.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/7.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/8.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/9.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/10.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/11.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/12.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/13.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                        {src: 'img/gallery/14.jpg', desc: "Annual SVET Family Spring Event at KOHL Children's Museum"},
                    ];
                    if ($rootScope.elHeight) {
                        $scope.shift = $rootScope.elHeight;
                    }
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
