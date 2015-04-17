(function () {
    'use strict';

    angular.module('home')
        .directive('svBottomSheetHandler', function ($mdBottomSheet) {
            return {
                link: function ($scope, el, attrs) {
                    el.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $mdBottomSheet.show({
                                templateUrl: 'scripts/templates/social-top-nav-cell.html'
                            });
                        });
                    });
                    el.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $mdBottomSheet.show({
                                templateUrl: 'scripts/templates/social-top-nav-cell.html'
                            });
                        });
                    });
                }
            };
        });
})();
