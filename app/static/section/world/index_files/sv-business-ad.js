(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svBusinessAd', function (AdServ, toastr, userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-business-ad.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.ads = AdServ.all();
                    $scope.user = userAuth.profile;

                    $scope.removeAd = function (ad) {
                        AdServ.removeAd(ad).then(function () {
                            toastr.success('You campaign has been deleted');
                        })
                    };
                }
            };
        });
})();
