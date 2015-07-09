(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svSectionSelectHandler', function ($rootScope) {
            return {
                link: function ($scope, el, attrs, ctrl) {
                    el.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection($scope.s.$id);
                            $rootScope.$broadcast('close:dropdown');
                        });
                    });
                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $scope.setSection($scope.s.$id);
                            $rootScope.$broadcast('close:dropdown');
                        });
                    });
                }
            };
        });
})();
