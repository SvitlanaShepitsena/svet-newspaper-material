(function () {
    'use strict';
    angular.module('common')
        .directive('svLinkBack', function (CurrentUserServ,$state) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-link-back.html',
                scope: {
                    url: '@',
                    params:'=',
                    lTitle: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                    });
                    $scope.navigate = function () {
                        $state.go($scope.url, $scope.params)

                    };
                }
            };
        });
})();
