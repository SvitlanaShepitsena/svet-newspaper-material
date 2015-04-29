(function () {
    'use strict';
    angular.module('classified')
        .directive('svOneClassified', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-one-classified.html',
                scope: {
                    cl: '=',
                    removeCl: '&'
                },
                link: function ($scope, el, attrs) {
                    var currentState = $state.$current.toString();
                    $scope.isEditable = currentState.indexOf('app.user') > -1;
                }
            };
        });
})();
