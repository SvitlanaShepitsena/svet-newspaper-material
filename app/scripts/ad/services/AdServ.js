(function () {
    'use strict';

    angular.module('ad')
        .factory('AdServ', function ($q, url, ads, $firebaseObject, $firebaseArray, CurrentUserServ) {

            return {
                saveAd: function (ad) {
                    return $q(function (resolve, reject) {
                        var user = CurrentUserServ.get();
                        ad.customer = _.pick(user, 'avatar', 'userName');
                        ad.timestamp = moment().format('x');
                        ad.shows = {unique:0,
                                    total:0};

                        var adsUrl = ads;
                        var adsArray = $firebaseArray(new Firebase(adsUrl));
                        adsArray.$add(ad).then(function (ref) {
                            resolve(ref.key());
                        });

                    });
                },
                allArr: function () {
                    var adsUrl = ads;
                    var adsArray = $firebaseArray(new Firebase(adsUrl));
                    return adsArray;
                }

            };
        });
})();
