(function () {
    'use strict';
    angular.module('classified')
        .factory('ClassifiedServ', function ($q, url, users, $firebaseObject, $firebaseArray, UserServ, CurrentUserServ) {
            var freeClNumber = 10;
            var clsUrl = url + 'cls/all/'

            function processClassified(user, cl) {
                var shortUser = _.omit(user, ['auth', 'password', 'token']);
                cl.user = shortUser;
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
                            resolve(uid.key());
                        })
                    });
                },
                editCl: function (cl) {
                    var user = CurrentUserServ.get();
                    var id = cl.$id;
                    return $q(function (resolve, reject) {
                        cl = processClassified(user, cl);
                        var classifiedObject = $firebaseObject(new Firebase(clsUrl));
                        classifiedObject.$loaded().then(function () {

                            classifiedObject[cl.$id] = cl;
                            classifiedObject.$save().then(function () {
                                resolve();
                            })

                        })
                    });
                },
                removeCl: function (cl) {
                    var user = CurrentUserServ.get();
                    return $q(function (resolve, reject) {
                        var clObj = $firebaseObject(new Firebase(clsUrl + cl.$id));
                        clObj.$loaded().then(function () {
                            clObj.$remove().then(function (uid) {
                                resolve(uid.key());
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
