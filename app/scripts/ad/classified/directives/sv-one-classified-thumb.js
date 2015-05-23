(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svOneClassifiedThumb', function (ClassifiedServ, toastr, $state, $timeout,$animate) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-one-classified-thumb.html',
                scope: {
                    cl: '=',
                    removeCl: '&',
                    editCl: '&',
                    widget: '=',
                    isHome: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.isEditable = !$scope.isHome;
                    $scope.editState = false;

                }
            };
        });
})();
