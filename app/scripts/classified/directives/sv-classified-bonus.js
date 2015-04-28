(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedBonus', function ($rootScope, CurrentUserServ, ClassifiedServ) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-bonus.html',
                scope: {
                    cls: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.leftToPost = ClassifiedServ.howManyAllowed($scope.cls.length)

                }
            };
        });
})();
