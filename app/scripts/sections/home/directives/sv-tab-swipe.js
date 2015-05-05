(function () {
    'use strict';
    angular.module('auth')
        .directive('svTabSwipe', function () {
            return {
                link: function ($scope, el, attrs, ctrl) {
                    el.on('mousedown', function (evt) {
                        evt.stopPropagation()
                        evt.preventDefault();
                    })
                }
            };
        });
})();
