(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedBonus', function ($rootScope, CurrentUserServ, ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-bonus.html',
                link: function ($scope, el, attrs) {
                    $scope.$watch('cls', function (newValue, oldValue) {
                        if (newValue === oldValue) return;

                        $scope.cls = newValue;

                        $scope.leftToPost = ClassifiedServ.howManyAllowed($scope.cls)
                    });

                }
            };
        });
})();
