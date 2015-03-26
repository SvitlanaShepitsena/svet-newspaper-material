(function () {
    'use strict';

    angular.module('home')
        .directive('svHomeMainNews', function (ImageSizeServ) {
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
                    $scope.imageurl = '/img/news/3-25-2015/gorlovka.jpg';
                    $scope.image = {
                        path: "",
                        width: 0,
                        height: 0
                    }
                    var img = new Image();
                    img.onload = function () {
                        $scope.image.width = img.width;
                        $scope.image.height = img.height;
                        $scope.image.path = '/img/news/3-25-2015/gorlovka.jpg';
                    }
                    img.src = $scope.imageurl;
                }
            };
        });
})();
