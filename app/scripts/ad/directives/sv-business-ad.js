(function () {
    'use strict';

    angular.module('ad')
        .directive('svBusinessAd', function (AdServ,toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-business-ad.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    $scope.ads = AdServ.allArr();

                    $scope.removeAd = function (ad) {
                        AdServ.removeAd(ad).then(function () {
                            toastr.warning('You campaign has been deleted');

                        })

                    };
                }
            };
        });
})();
