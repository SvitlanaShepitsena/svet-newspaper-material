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
                    item: '@',
                    ownerField: '@'
                },
                link:
                    function ($scope, el, attrs) {
                        $scope.$watch('list', function (newValue, oldValue) {


                            if ($scope.ownerField) {
                                var filteredList = $filter($scope.filter, $scope.filterValue)($scope.list);
                                $scope.filteredList = _.filter(filteredList, function (item) {
                                    return item[$scope.ownerField]===userAuth.key;
                                });
                                var i=10;
                            } else {
                                $scope.filteredList = $filter($scope.filter, $scope.filterValue)($scope.list);
                            }
                        });
                }
            };
        });
})();
