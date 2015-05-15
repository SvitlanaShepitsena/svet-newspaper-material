(function () {
    'use strict';
    angular.module('common')
        .directive('svLinkBack', function (userAuth,$state) {
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
                        return userAuth.profile;
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
