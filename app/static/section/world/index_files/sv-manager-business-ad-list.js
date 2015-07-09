(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerBusinessAdList', function (AdServ, userAuth, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-manager-business-ad-list.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.ads = AdServ.all();
                    $scope.user = userAuth.profile;

                    $scope.removeAd = function (ad) {
                        AdServ.removeAd(ad).then(function () {
                            toastr.warning('You campaign has been deleted');
                        })
                    };
                }
            };
        });
})();
