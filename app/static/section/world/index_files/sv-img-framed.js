(function () {
    'use strict';
    angular.module('common')
        .directive('svImgFramed', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-img-framed.html',
                scope: {
                    svImg: '=',
                    maxWidth: '=',
                    maxHeight: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.maxW = $scope.maxWidth || 600;
                    $scope.maxH = $scope.maxHeight || 400;
                    el.css('position', 'relative');
                    el.css('overflow', 'hidden');
                    el.css('max-width', $scope.maxW + 'px');
                    el.css('max-height', $scope.maxH + 'px');
                    var img = el.find('img');
                    img.css('position', 'relative');
                    img.css('width', '100%');
                    img.css('display', 'block');
                }
            };
        });
})();
