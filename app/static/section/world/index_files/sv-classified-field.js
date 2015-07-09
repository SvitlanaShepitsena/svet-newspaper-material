(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedField', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/classified/directives/sv-classified-field.html',
                scope: true,
                link: function ($scope, el, attrs) {
                    $scope.name = attrs.name;
                }
            };
        });
})();
