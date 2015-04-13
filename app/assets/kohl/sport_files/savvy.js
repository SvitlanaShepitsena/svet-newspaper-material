angular.module('ui.bootstrap.savvy', [])

.directive('savvy', [
    '$document',
    '$rootScope',
    function ($document, $rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.$watch(attrs.savvy, function (newValue, oldValue) {
                    $.savvy(element, newValue);
                });
            }
        };
    }
]);