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
                link: function ($scope, el, attrs) {
                    $scope.$watchCollection('list', function (newValue, oldValue) {
                        if (!$scope.filter) {
                            $scope.filteredList = _.filter($scope.list, function (item) {
                                return item[$scope.ownerField] === userAuth.key;
                            });

                        } else {
                            if ($scope.ownerField) {
                                var filteredList = $filter($scope.filter, $scope.filterValue)($scope.list);
                                $scope.filteredList = _.filter(filteredList, function (item) {
                                    return item[$scope.ownerField] === userAuth.key;
                                });
                            } else {
                                $scope.filteredList = $filter($scope.filter, $scope.filterValue)($scope.list);
                            }
                        }
                    });
                }
            };
        });
})();
