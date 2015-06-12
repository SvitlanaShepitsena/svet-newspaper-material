(function () {
    'use strict';

    angular.module('common')
        .directive('svImgBackground', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-img-background.html',
                scope: {
                    svImage: '=',
                    linkRoute: '@',
                },
                link: function ($scope, el, attrs) {

                    var img = new Image();
                    img.src = $scope.image;
                    img.onload = function () {
                        var width = img.width;
                        var height = img.height;

                        var breakPoint = 1;

                        var iElm = el.find('i');
                        iElm.css({
                            'background-image': 'url(' + $scope.svImage + ')',
                            'background-size': 'cover'
                        });
                    }

                }
            };
        });
})();
