(function () {
    'use strict';

    angular.module('ad')
        .directive('svBusinessAd', function (AdServ) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-business-ad.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    $scope.ads = AdServ.allArr();
                }
            };
        });
})();
