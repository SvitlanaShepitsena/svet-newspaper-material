(function () {
    'use strict';

    angular.module('common')
        .directive('svOnePhotoGallery', function (AWSServ) {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-one-photo-gallery.html',
                scope: {},
                link: function ($scope, el, attrs) {

                }
                
            };
        });
})();
