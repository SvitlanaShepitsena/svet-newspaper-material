(function () {
    'use strict';

    angular.module('common')
        .directive('svLightboxGallery', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-lightbox-gallery.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
