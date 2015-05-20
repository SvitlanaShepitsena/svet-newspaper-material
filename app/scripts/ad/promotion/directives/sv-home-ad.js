(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svHomeAd', function (AdServ) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-home-ad.html',
                scope: {
                    place: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.adIndex = 0;
                    AdServ.allArr().then(function (ads) {
                        $scope.ads = ads;
                    });
                    var index;
                    $scope.showPrevAd = function () {
                        index = $scope.adIndex;
                        index--;
                        index = index < 0 ? $scope.ads.length - 1 : index;
                        $scope.adIndex = index;
                    };
                    $scope.showNextAd = function () {
                        index = $scope.adIndex;
                        index++;
                        index = index === $scope.ads.length ? 0 : index;
                        $scope.adIndex = index;
                    };
                }
            };
        });
})();
