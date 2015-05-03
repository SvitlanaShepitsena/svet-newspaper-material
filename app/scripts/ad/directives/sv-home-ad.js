(function () {
    'use strict';

    angular.module('ad')
        .directive('svHomeAd', function (AdServ) {
            return {
                replace: true,
                templateUrl: 'scripts/ad/directives/sv-home-ad.html',
                scope: {
                    place: '@'
                },
                link: function ($scope, el, attrs) {
                    var allAdds = AdServ.allArr();
                    allAdds.$loaded().then(function () {
                        $scope.placeAds = _.where(allAdds,function (ad) {
                            return ad.place === $scope.place;
                        });
                        var ind = _.random($scope.placeAds.length);
                        $scope.ad = $scope.placeAds[ind];


                        AdServ.increaseShow($scope.ad.$id).then(function () {
                            console.log('success');
                        });
                    });

                }
            };
        });
})();
