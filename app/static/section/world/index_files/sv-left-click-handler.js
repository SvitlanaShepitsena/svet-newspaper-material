(function () {
    'use strict';
    angular.module('common')
        .directive('svLeftClickHandler', function () {
            return {
                link: function ($scope, el, attrs) {
                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleLeft();
                        });
                    });
                    el.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleLeft();
                        });
                    });
                }
            };
        });
})();
