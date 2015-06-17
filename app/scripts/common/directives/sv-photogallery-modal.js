(function () {
    'use strict';

    angular.module('common')
        .directive('svPhotogalleryModal', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photogallery-modal.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
