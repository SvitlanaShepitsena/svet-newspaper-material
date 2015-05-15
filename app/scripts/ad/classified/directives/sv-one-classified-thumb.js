(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svOneClassifiedThumb', function (ClassifiedServ, toastr, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-one-classified-thumb.html',
                scope: {
                    cl: '=',
                    removeCl: '&',
                    editCl: '&',
                    widget: '='
                },
                link: function ($scope, el, attrs) {
                    var currentState = $state.$current.toString();
                    $scope.isEditable = currentState.indexOf('app.user') > -1;
                    $scope.editState = false;
                }
            };
        });
})();
