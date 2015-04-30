(function () {
    'use strict';
    angular.module('classified')
        .factory('ClassifiedServ', function ($q, url, users, $firebaseObject, $firebaseArray, UserServ, CurrentUserServ) {
            var freeClNumber = 10;
            var clsUrl = url + 'cls/all/'

            function processClassified(user, cl) {
                cl.user = user.id;
                return cl;
            }

            return {
                getClByKey: function (key) {
                    var classifiedObj = $firebaseObject(new Firebase(clsUrl + key));
                    return classifiedObj;
                },
                getAllCls: function () {
                    var classifiedArray = $firebaseArray(new Firebase(clsUrl));
                    return classifiedArray;
                },
                getUserClassifiesArr: function (id) {
                    var classifiedUserUrl = users + id + '/cls/';
                    var classifiedArray = $firebaseArray(new Firebase(classifiedUserUrl));
                    return classifiedArray;
                },
                addCl: function (cl) {
                    var user = CurrentUserServ.get();
                    return $q(function (resolve, reject) {
                        cl = processClassified(user, cl);
                        var classifiedArray = $firebaseArray(new Firebase(clsUrl));
                        classifiedArray.$add(cl).then(function (uid) {
                            var key = uid.key();
                            UserServ.addUserCl(user.id, cl, key).then(function (uidfinal) {
                                resolve(uidfinal.key());
                            });
                        })
                    });
                },
                removeCl: function (cl) {
                    var user = CurrentUserServ.get();
                    return $q(function (resolve, reject) {
                        var classifiedArray = $firebaseObject(new Firebase(clsUrl));
                        classifiedArray.$loaded().then(function () {
                            console.log('run here ClassifiedServ.js');
                            classifiedArray.$remove(cl.$id).then(function (uid) {
                                console.log(uid);
                                var key = uid.key();
                                UserServ.removeUserCl(user.id, cl).then(function (uidfinal) {
                                    resolve(uidfinal.key());
                                });
                            })
                        })
                    });
                },
                getSections: function () {
                    var classifiedSectionsUrl = url + '/cls/sections/';
                    var classifiedArray = $firebaseArray(new Firebase(classifiedSectionsUrl));
                    return classifiedArray;
                },
                isClAvailable: function (exists) {
                    if (!exists) {
                        return o;
                    }
                    var len = exists.length;
                    return (freeClNumber - len) > 0;
                },
                howManyAllowed: function (exists) {
                    if (!exists) {
                        return 0;
                    }
                    var len = exists.length;
                    var left = freeClNumber - len;
                    return left < 0 ? 0 : left;
                }
            };
        });
})();
