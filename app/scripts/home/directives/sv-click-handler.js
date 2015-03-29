(function () {
    'use strict';

    angular.module('home')
        .directive('svClickHandler', function () {
            return {
                link: function ($scope, el, attrs) {
                    el.on('touchstart', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        $scope.$apply(function () {
                            $scope.toggleLeft();
                        });
                    })

                }
            };
        });
})();
