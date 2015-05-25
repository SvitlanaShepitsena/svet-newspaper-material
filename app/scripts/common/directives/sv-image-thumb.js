(function () {
    'use strict';
    angular.module('common')
        .directive('svImageThumb', function ($stateParams, svetNews, ArticlesServ) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-image-thumb.html',
                scope: {
                    img: '@',
                    circleRadius: '@',
                    imgBottomShift: '@',
                    imgContainerWidth: '@',
                    imgContainerHeight: '@',
                    imgWidth: '@',
                    imgHeight: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.circleRadius = $scope.circleRadius || '50%';
                    $scope.imgBottomShift = $scope.imgBottomShift || '10%';
                    $scope.imgRightShift = $scope.imgRightShift || '20%';
                    $scope.sectionName = $stateParams.sectionName;
                    if (!svetNews.public) {
                        ArticlesServ.setHomeNewsLive().then(function () {
                            $scope.newsList = svetNews.public;
                        })
                    } else {
                        $scope.newsList = svetNews.public;
                    }
                }
            };
        });
})();
