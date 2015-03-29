(function () {
    'use strict';

    angular.module('home')
        .directive('svLeftClickHandler', function () {
            return {
                link: function ($scope, el, attrs) {
                    el.on('touchstart', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleLeft();
                        });
                    });
                    el.on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleLeft();
                        });
                    });

                }
            };
        });
})();
