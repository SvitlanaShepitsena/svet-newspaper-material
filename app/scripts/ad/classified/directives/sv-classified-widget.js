(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svClassifiedWidget', function (ClassifiedServ) {
            return {
                replace: true,
                templateUrl: '../scripts/ad/classified/directives/sv-classified-widget.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.cls = ClassifiedServ.getAllCls();
                }
            };
        });
})();
