(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svOneCampaignThumb', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-one-campaign-thumb.html',
                scope: {
                    ad: '=',
                    removeAd: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
