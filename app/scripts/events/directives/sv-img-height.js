(function () {
    'use strict';
    angular.module('events')
        .directive('svImgHeight', function ($rootScope) {
            return {
                require: '?^svPhotogallery',
                link: function ($scope, el, attrs, ctrl) {
                    ctrl.moveArrows();
                    var domEl = el[0];
                    $scope.$watch(function () {
                        return el.height();
                    }, function (newValue, oldValue) {
                        if (newValue <=0) {
                            return;
                        }
                        $rootScope.elHeight = newValue;
                        ctrl.moveArrows(newValue);
                    });
                    var breakPoint = 1
                }
            };
        });
})();
