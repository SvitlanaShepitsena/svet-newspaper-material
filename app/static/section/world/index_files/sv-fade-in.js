(function () {
    'use strict';

    angular.module('common')
        .directive('svFadeIn', function ($timeout) {
            return {
                priority: -1,
                link: function ($scope, el, attrs) {

                    $scope.$watch(attrs.svFadeIn, function (nv, ov) {
                        if (nv != ov) {
                            //el.css({'top':'-200px','opacity':0 });
                            el.animate({'opacity': 0}, 400);
                            el.animate({'opacity': 1}, 400);
                        }
                    });
                }
            };
        });
})();
