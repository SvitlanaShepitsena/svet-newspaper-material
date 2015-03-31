(function () {
    'use strict';

    angular.module('home')
        .directive('svSvetSocial', function ($mdBottomSheet) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-svet-social.html',
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },
                link: function ($scope, element, attr) {
                    element.on('touchstart', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $mdBottomSheet.show({
                                templateUrl: 'scripts/home/templates/social-bottom-list.html'
                            });
                        });
                    });
                    element.on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        $scope.$apply(function () {
                            $mdBottomSheet.show({
                                templateUrl: 'scripts/home/templates/social-bottom-list.html'
                            });
                        });
                    });
                }
            };
        });
})();
