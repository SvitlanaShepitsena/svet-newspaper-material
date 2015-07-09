(function () {
    'use strict';
    angular.module('ad.classified')
        .directive('svAnimateOnChange', function ($timeout) {
            return {
                priority:-1,
                link: function ($scope, el, attrs) {
                    $scope.$watch(attrs.svAnimateOnChange, function (nv, ov) {
                        if (nv != ov) {
                            el.addClass('changed');
                            $timeout(function () {
                                el.removeClass('changed');
                            }, 1000); // Could be enhanced to take duration as a parameter
                        } else{
                            el.css({'top':'-200px','opacity':0 });
                            el.animate({'top':'0px','opacity':1 },400, function () {

                            el.css({'top':'','opacity':'' });
                            });

                        }
                    });
                }
            };
        });
})();
