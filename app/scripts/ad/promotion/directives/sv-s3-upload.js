(function () {
    'use strict';

    angular.module('ad.promotion')
        .directive('svS3Upload', function () {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-s3-upload.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    $scope.options = {
                        limit: 1,
                        immediate: true,
                        multiple:true
                    }
                }
            };
        });
})();
