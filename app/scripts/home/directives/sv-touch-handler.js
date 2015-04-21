(function () {
    'use strict';

    angular.module('home')
        .directive('svTouchHandler', function () {
            return {
                link: function ($scope, el, attrs) {
                    el.on('touchmove', function (evt) {
                        console.log(evt);
                        evt.stopPropagation();
                    });

                }
            };
        });
})();
