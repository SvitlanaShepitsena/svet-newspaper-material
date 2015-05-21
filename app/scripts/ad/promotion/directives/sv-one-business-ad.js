(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svOneBusinessAd', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/promotion/directives/sv-one-business-ad.html',
                scope: {
                    ad: '=',
                    removeAd:'&'
                },
                link: function ($scope, el, attrs) {
                    $scope.user=userAuth.profile;
                }
            };
        });
})();
