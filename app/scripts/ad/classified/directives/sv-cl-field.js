(function () {
    'use strict';

    angular.module('ad.classified')
        .directive('svClField', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-cl-field.html',
                scope:true,
                link: function ($scope, el, attrs) {
                    $scope.name = attrs.name;

                }
            };
        });
})();
