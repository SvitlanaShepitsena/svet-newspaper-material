(function () {
    'use strict';
    angular.module('common')
        .directive('svSvetLabel', function ($state) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-svet-label.html',
                scope: {
                    routeName: '@',
                    params: '=',
                    fs: '@',
                    tc: '@',
                    bgc: '@',
                    cursorType: '@',
                    sectionTitle: '@',
                    textDecoration: '@',
                    labelPadding: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.textDecoration = $scope.textDecoration || 'underline';
                    $scope.fs = $scope.fs || 'fs-caption';
                    $scope.tc = $scope.tc || 'tc-grey-500';
                    $scope.bgc = $scope.bgc || 'bgc-grey-300';
                    $scope.labelPadding = $scope.labelPadding ||
                        '2px 4px';
                    $scope.navigateTo = function () {
                        $state.go($scope.routeName, $scope.params);
                    };
                }
            };
        });
})();
