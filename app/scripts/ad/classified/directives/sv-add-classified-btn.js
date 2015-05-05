(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svAddClassifiedBtn', function (ClassifiedServ, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-add-classified-btn.html',
                link: function ($scope, el, attrs) {
                    $scope.startCl = function () {
                        if (!ClassifiedServ.isClAvailable($scope.cls)) {
                            $scope.notAllowed = true;
                            $scope.addState = false;
                        } else {
                            $scope.addState = true;
                        }
                    };
                }
            };
        });
})();
