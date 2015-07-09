(function () {
    'use strict';
    angular.module('common')
        .directive('svLinkBack', function (userAuth, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-link-back.html',
                scope: {
                    url: '@',
                    method: '&',
                    params: '=',
                    lTitle: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.navigate = function () {
                        if ($scope.params) {
                            var authorKey = $scope.params.uid;
                            if (authorKey === userAuth.key) {
                                $scope.params.uid = userAuth.profile.userName;
                            }
                        }
                        $state.go($scope.url, $scope.params)
                    };
                }
            };
        });
})();
