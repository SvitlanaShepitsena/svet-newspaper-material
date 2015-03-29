(function () {
    'use strict';

    angular.module('home')
        .directive('svRightClickHandler', function () {
            return {
                link: function ($scope, el, attrs) {

                    el.on('touchstart', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleRight();
                        });
                    })
                    el.on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleRight();
                        });
                    })

                    $scope.$watch(function () {
                        console.log('digest cycle');
                    });
                }
            };
        });
})();
