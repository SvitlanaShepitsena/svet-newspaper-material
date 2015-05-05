(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svBusinessAd', function (AdServ, toastr) {
            return {
                replace: true,
                templateUrl: '/sv-business-ad.html',
                scope: {},
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
