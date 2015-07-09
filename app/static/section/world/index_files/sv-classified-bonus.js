(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedBonus', function ($rootScope, ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-bonus.html',
                link: function ($scope, el, attrs) {
                    $scope.startCl = function () {
                        if (!ClassifiedServ.isClAvailable($scope.cls)) {
                            $scope.notAllowed = true;
                            $scope.addState = false;
                        } else {
                            $scope.notAllowed = false;
                            $scope.addState = true;
                        }
                    };
                }
            };
        });
})();
