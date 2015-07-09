(function () {
    'use strict';
    angular.module('common')
        .directive('svRightClickHandler', function () {
            return {
                link: function ($scope, el, attrs ) {
                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleRight();
                        });
                    })
                    el.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleRight();
                        });
                    })
                }
            };
        });
})();
