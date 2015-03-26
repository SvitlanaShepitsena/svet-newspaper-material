(function () {
    'use strict';

    angular.module('home')
        .directive('svHomeMainNews', function (ImageSizeServ, $window) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-home-main-news.html',
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {
                    var imgUrl = '/img/news/3-25-2015/gorlovka.jpg';


                    $scope.$watch('elImgWidth', function (newValue, oldValue) {

                        $scope.elImgWidth = el.find('img')[0].clientWidth;
                        ImageSizeServ.getScaledHeight(imgUrl, $scope.elImgWidth).then(function (height) {
                            $scope.imgStyle = {height: height + 'px'};


                        });
                    });


                }
            };
        });
})();
