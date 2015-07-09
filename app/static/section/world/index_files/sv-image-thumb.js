(function () {
    'use strict';

    angular.module('common')
        .directive('svImageThumb', function ($state, defimg) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-image-thumb.html',
                scope: {
                    svImage: '@',
                    linkRoute: '@',
                    params: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.svImage = $scope.svImage || defimg;
                    $scope.navigate = function () {
                        $state.go($scope.linkRoute, {id: $scope.params});
                    };
                    var img = new Image();
                    img.src = $scope.svImage;
                    img.onload = function () {
                        var width = img.width;
                        var height = img.height;

                        var breakPoint = 1;

                        var iElm = el.find('i');
                        iElm.css({
                            'background-image': 'url(' + $scope.svImage + ')',
                            'background-size': 'cover',
                            'background-position': '50% 25%',
                            'height': 100 + '%',
                            'display': 'block'
                        });
                    }
                }
            };
        });
})();
