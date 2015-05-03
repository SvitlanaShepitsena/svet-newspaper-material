(function () {
    'use strict';

    angular.module('ad')
        .factory('AdServ', function ($q, url, ads, $firebaseObject, $firebaseArray, CurrentUserServ) {

            return {
                saveAd: function (ad) {
                    return $q(function (resolve, reject) {
                        var user = CurrentUserServ.get();
                        ad.customer = _.pick(user, 'avatar', 'userName', 'key', 'id');
                        ad.timestamp = moment().format('x');
                        ad.shows = {
                            unique: 0,
                            total: 0
                        };

                        var adsUrl = ads;
                        var adsArray = $firebaseArray(new Firebase(adsUrl));
                        adsArray.$add(ad).then(function (ref) {
                            resolve(ref.key());
                        });

                    });
                },
                removeAd: function (ad) {
                    return $q(function (resolve, reject) {

                        var adUrl = ads + ad.$id;
                        var adObject = $firebaseObject(new Firebase(adUrl));
                        adObject.$remove().then(function (ref) {
                            resolve(ref.key());
                        });

                    });
                },
                updateAd: function (ad) {
                    return $q(function (resolve, reject) {
                        var adUrl = ads + ad.$id;
                        var adObject = $firebaseObject(new Firebase(adUrl));
                        adObject.$loaded().then(function () {
                            adObject = _.extend(adObject,ad);
                            adObject.$save().then(function (ref) {
                                resolve(ref.key());
                            });
                        })

                    });
                },
                allArr: function () {
                    var adsUrl = ads;
                    var adsArray = $firebaseArray(new Firebase(adsUrl));
                    return adsArray;
                },
                getObj: function (id) {
                    var adUrl = ads+id;
                    var adObject = $firebaseObject(new Firebase(adUrl));
                    return adObject;
                }

            };
        });
})();
