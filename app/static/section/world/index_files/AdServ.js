(function () {
    'use strict';
    angular.module('ad.promotion')
        .factory('AdServ', function ($q, url, ads, $firebaseObject, $firebaseArray, userAuth) {
            function getUserKey(users, userName) {
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                    if (user.profile.userName === userName) {
                        return user.$id;
                    }
                }
            }

            return {
                saveAd: function (ad, customers) {
                    return $q(function (resolve, reject) {
                        if (ad.customerUserName) {
                            ad.customerKey = getUserKey(customers, ad.customerUserName);
                        } else {
                            var user = userAuth.profile;
                            ad.customerKey = userAuth.key;
                            ad.customerUserName = userAuth.profile.userName;
                        }
                        ad.timestamp = moment().format('x');
                        ad.shows = {
                            unique: 0,
                            total: 0
                        };
                        var adsArray = $firebaseArray(new Firebase(ads));
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
                            adObject = _.extend(adObject, ad);
                            adObject.$save().then(function (ref) {
                                resolve(ref.key());
                            });
                        })
                    });
                },
                increaseShow: function (adId) {
                    return $q(function (resolve, reject) {
                        var adUrl = ads + adId;
                        var adObject = $firebaseObject(new Firebase(adUrl));
                        adObject.$loaded().then(function () {
                            adObject.shows.total += 1;
                            adObject.shows.unique += 1;
                            adObject.$save().then(function (ref) {
                                resolve(ref.key());
                            });
                        })
                    });
                },
                allArrShuffled: function () {
                    var adsUrl = ads;
                    return $q(function (resolve, reject) {
                        var adsArray = $firebaseArray(new Firebase(adsUrl));
                        adsArray.$loaded().then(function () {
                            var randomOrder = _.shuffle(adsArray);
                            resolve(randomOrder);
                        })
                    });
                },
                all: function () {
                    var adsUrl = ads;
                    var adsArray = $firebaseArray(new Firebase(adsUrl));
                    return adsArray;
                },
                getObj: function (id) {
                    var adUrl = ads + id;
                    var adObject = $firebaseObject(new Firebase(adUrl));
                    return adObject;
                }
            };
        });
})();
