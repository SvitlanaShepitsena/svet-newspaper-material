(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedWidget', function (ClassifiedServ, classified, $interval, classifiedInterval, TimeLeftServ, $mdMedia) {
            var interval;

            function indexLimit(index, max, operation) {
                if (operation === 'increase') {
                    index++;
                    index = index > max ? 0 : index;
                }
                if (operation === 'decrease') {
                    index--;
                    index = index < 0 ? max : index;
                }
                return index
            }

            function isNew($scope) {
                var currentSvCl = $scope.cls[$scope.currentClassifiedIndex];
                if (!currentSvCl) {
                    return;
                }
                $scope.currentClTime = currentSvCl.timestamp;
                $scope.isCurrentNew = TimeLeftServ.isNew($scope.currentClTime, 24);
            }

            function startInterval($scope) {
                $scope.cls = classified.list;
                $scope.currentClassifiedIndex = $scope.cls.length - 1;
                isNew($scope);
                $interval.cancel(interval);
                interval = $interval(function () {
                    $scope.currentClassifiedIndex = indexLimit($scope.currentClassifiedIndex, $scope.cls.length, 'decrease');
                    isNew($scope);
                }, classifiedInterval);
            }

            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-widget.html',
                scope: {
                    isHome: '='
                },
                link: function ($scope, el, attrs) {
                    ClassifiedServ.bindClassifiedsLive().then(function () {
                        startInterval($scope);
                    });
                    $scope.$on('cl-added', function () {
                        startInterval($scope);
                    });
                    $scope.nextCl = function () {
                        $scope.currentClassifiedIndex = indexLimit($scope.currentClassifiedIndex, $scope.cls.length - 1, 'increase');
                        isNew($scope);
                    };
                    $scope.prevCl = function () {
                        $scope.currentClassifiedIndex = indexLimit($scope.currentClassifiedIndex, $scope.cls.length - 1, 'decrease');
                        isNew($scope);
                    };
                }
            };
        });
})();
