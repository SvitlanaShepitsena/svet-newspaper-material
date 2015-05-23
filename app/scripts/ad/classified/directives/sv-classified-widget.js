(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedWidget', function (ClassifiedServ, classified, $interval, classifiedInterval) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-widget.html',
                scope: {
                    isHome: '='
                },
                link: function ($scope, el, attrs) {
                    ClassifiedServ.bindClassifiedsLive().then(function () {
                        $scope.cls = classified.list;
                        $scope.currentClassifiedIndex = $scope.cls.length - 1;
                        $interval(function () {
                            var index = $scope.currentClassifiedIndex;
                            index--;
                            index = index < 0 ? $scope.cls.length - 1 : index;
                            $scope.currentClassifiedIndex = index;
                        }, classifiedInterval);
                    });
                }
            };
        });
})();
