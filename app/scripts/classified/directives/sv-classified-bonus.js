(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedBonus', function ($rootScope,CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-bonus.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    $scope.user = CurrentUserServ.get();
                    //$rootScope.$watch('user', function (newValue, oldValue) {
                    //    if (newValue === oldValue) return;
                    //
                    //    $scope.user = newValue;
                    //
                    //});

                }
            };
        });
})();
