(function () {
    'use strict';

    angular.module('common')
        .directive('svAngularGallery', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-angular-gallery.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
