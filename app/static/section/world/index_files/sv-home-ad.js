(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svHomeAd', function (AdServ, $timeout, $mdMedia) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-home-ad.html',
                scope: {
                    place: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.arrowShift;
                    $scope.$watch(function () {
                        return $mdMedia('sm');
                    }, function (sm) {
                        if (sm) {
                            $scope.arrowShift = 35;
                        }
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-sm');
                    }, function (gtSm) {
                        if (gtSm) {
                            $scope.arrowShift = 47;
                        }
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-md');
                    }, function (gtMd) {
                        if (gtMd) {
                            $scope.arrowShift = 57;
                        }
                    });
                    $scope.$watch(function () {
                        return $mdMedia('gt-lg');
                    }, function (gtLg) {
                        if (gtLg) {
                            $scope.arrowShift = 67;
                        }
                    });
                    $scope.adIndex = 0;
                    AdServ.allArrShuffled().then(function (ads) {
                        $scope.ads = ads;
                        $scope.ad = $scope.ads[$scope.adIndex];
                        $scope.currentAd = $scope.ads[$scope.adIndex].banner;
                        AdServ.increaseShow($scope.ads[$scope.adIndex].$id);
                    });
                    var index;
                    $scope.showPrevAd = function () {
                        index = $scope.adIndex;
                        index--;
                        index = index < 0 ? $scope.ads.length - 1 : index;
                        $scope.adIndex = index;
                        $timeout(function () {

                            $scope.ad = $scope.ads[$scope.adIndex];
                            $scope.currentAd = $scope.ads[$scope.adIndex].banner;
                        }, 700);
                        AdServ.increaseShow($scope.ads[$scope.adIndex].$id);
                    };
                    $scope.showNextAd = function () {
                        index = $scope.adIndex;
                        index++;
                        index = index === $scope.ads.length ? 0 : index;
                        $scope.adIndex = index;
                        $timeout(function () {

                            $scope.ad = $scope.ads[$scope.adIndex];
                            $scope.currentAd = $scope.ads[$scope.adIndex].banner;
                        }, 700);
                        AdServ.increaseShow($scope.ads[$scope.adIndex].$id);
                    };
                }
            };
        });
})();
