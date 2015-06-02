(function () {
    'use strict';
    angular.module('common')
        .directive('svZeroLengthNotice', function ($filter, userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-zero-length-notice.html',
                scope: {
                    list: '=',
                    filter: '@',
                    filterValue: '@',
                    item: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.filteredList = $filter($scope.filter, $scope.filterValue)($scope.list);
                    var breakPoint = 1;
                }
            };
        });
})();
