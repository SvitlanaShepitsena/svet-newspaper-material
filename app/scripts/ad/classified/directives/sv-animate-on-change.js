(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svAnimateOnChange', function ($timeout) {
            return {
                link: function ($scope, el, attrs) {
                    $scope.$watch(attrs.svAnimateOnChange, function (nv, ov) {
                        if (nv != ov) {
                            el.addClass('changed');
                            $timeout(function () {
                                el.removeClass('changed');
                            }, 1000); // Could be enhanced to take duration as a parameter
                        }
                    });
                }
            };
        });
})();
