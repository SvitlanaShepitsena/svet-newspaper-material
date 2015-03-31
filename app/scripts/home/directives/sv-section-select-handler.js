(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionSelectHandler', function () {
            return {
                require: '^lxDropdown',
                link: function ($scope, el, attrs,lxCtrl) {
                    console.log('dddddd');
                    console.log(ctrl);
                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection();
                            ctrl.toggle();
                        });
                    });
                    el.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection();
                        });
                    });
                }
            };
        });
})();
