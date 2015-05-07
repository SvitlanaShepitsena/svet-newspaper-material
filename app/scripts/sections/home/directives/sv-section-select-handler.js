(function () {
    'use strict';

    angular.module('sections.home')
        .directive('svSectionSelectHandler', function ($rootScope) {
            return {
                link: function ($scope, el, attrs) {

                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection($scope.s.$id);
                        });
                    });

                    el.on('click', function (event) {
                        console.log('run here sv-section-select-handler.js');
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection($scope.s.$id);
                        });
                    });
                }
            };
        });
})();
