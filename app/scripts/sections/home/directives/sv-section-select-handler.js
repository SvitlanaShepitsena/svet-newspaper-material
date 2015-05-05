(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionSelectHandler', function ($rootScope) {
            return {
                link: function ($scope, el, attrs) {

                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection($scope.s);
                        });
                    });

                    el.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection($scope.s);
                        });
                    });
                }
            };
        });
})();
