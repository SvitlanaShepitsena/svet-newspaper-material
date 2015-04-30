(function () {
    'use strict';
    angular.module('classified')
        .directive('svOneClassifiedThumb', function (CurrentUserServ, ClassifiedServ, toastr, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-one-classified-thumb.html',
                scope: {
                    cl: '=',
                    removeCl: '&'
                },
                link: function ($scope, el, attrs) {
                    var currentState = $state.$current.toString();
                    $scope.clClone = angular.copy($scope.cl);
                    $scope.isEditable = currentState.indexOf('app.user') > -1;
                    $scope.editState = false;


                    $scope.setToEditState = function () {

                        $scope.editState = true;
                    };
                }
            };
        });
})();
