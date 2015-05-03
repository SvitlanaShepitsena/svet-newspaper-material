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
                    allAdds.$loaded().then(function (ads) {
                        $scope.ad = _.chain(ads).where(function (ad) {
                            return ad.place === $scope.place;
                        }).shuffle().first().value();
                        console.log($scope.ad.$id);
                        AdServ.increaseShow($scope.ad.$id).then(function () {
                            console.log('success');
                        });
                    });

                }
            };
        });
})();
