(function () {
    'use strict';

    angular.module('common')
        .directive('svImgFramedString', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-img-framed-string.html',
                scope: {
                    svImg: '@',
                    maxWidth: '@',
                    maxHeight: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.maxW = $scope.maxWidth || 250;
                    $scope.maxH = $scope.maxHeight || 150;
                    el.css('position', 'relative');
                    el.css('overflow', 'hidden');
                    el.css('max-width', $scope.maxW + 'px');
                    el.css('max-height', $scope.maxH + 'px');
                    var img = el.find('img');
                    img.css('position', 'relative');
                    img.css('display', 'block');
                    img.css('height', '150px');
                }
            };
        });
})();
