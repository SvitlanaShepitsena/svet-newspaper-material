(function () {
    'use strict';

    angular.module('social')
        .directive('svSocialTopNavCell', function ($mdBottomSheet) {
            return {
                replace: true,
                templateUrl: 'scripts/social/directives/sv-social-top-nav-cell.html',
                scope: {},
                controller: function ($scope, $timeout) {
                    $scope.alert = '';
                    $scope.showListBottomSheet = function ($event) {
                        $scope.alert = '';
                        $mdBottomSheet.show({
                            templateUrl: 'scripts/templates/social-top-nav-cell.html',
                            targetEvent: $event
                        }).then(function (clickedItem) {
                            $scope.alert = clickedItem.name + ' clicked!';
                        });
                    };
                    $scope.listItemClick = function ($index) {
                        var clickedItem = $scope.items[$index];
                        $mdBottomSheet.hide(clickedItem);
                    };
                }
            };
        });
})();
