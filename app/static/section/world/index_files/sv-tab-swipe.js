(function () {
    'use strict';
    angular.module('common')
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
