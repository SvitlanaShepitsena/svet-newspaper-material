(function () {
    'use strict';
    angular.module('common')
        .directive('svLinkBack', function (CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-link-back.html',
                scope: {
                    url: '@',
                    lTitle: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                    });
                }
            };
        });
})();
