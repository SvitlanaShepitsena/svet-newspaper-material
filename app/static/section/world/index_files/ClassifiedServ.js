(function () {
    'use strict';
    angular.module('ad.classified')
        .factory('ClassifiedServ', function ($q, url, $rootScope, users, $firebaseObject, $firebaseArray, userAuth, classified) {
            var freeClNumber = 10;
            var clsUrl = url + 'cls/all/'

            function processClassifiedArray(cls) {
                cls = _.filter(cls, function (cl) {
                    return !cl.banned;
                });
                var processedList = _.sortBy(cls, 'timestamp');
                return processedList;
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
                bindClassifiedsLive: function () {
                    return $q(function (resolve, reject) {
                        var classifiedArray = $firebaseArray(new Firebase(clsUrl));
                        classifiedArray.$loaded(function () {
                            classified.list = processClassifiedArray(classifiedArray);
                            classifiedArray.$watch(function () {
                                var newList=processClassifiedArray(classifiedArray);
                                classified.list = newList;
                                $rootScope.$broadcast('cl-added');
                            });
                            resolve();
                        });
                    });
                },
                getUserClassifiesArr: function (id) {
                    var classifiedUserUrl = users + id + '/cls/';
                    var classifiedArray = $firebaseArray(new Firebase(classifiedUserUrl));
                    return classifiedArray;
                },
                addCl: function (cl) {
                    return $q(function (resolve, reject) {
                        cl.userKey = userAuth.key;
                        var classifiedArray = $firebaseArray(new Firebase(clsUrl));
                        classifiedArray.$add(cl).then(function (ref) {
                            resolve(ref.key());
                        })
                    });
                },
                editCl: function (cl) {
                    var id = cl.$id;
                    return $q(function (resolve, reject) {
                        var classifiedObject = $firebaseObject(new Firebase(clsUrl));
                        classifiedObject.$loaded().then(function () {
                            classifiedObject[cl.$id] = cl;
                            classifiedObject.$save().then(function () {
                                resolve();
                            })
                        })
                    });
                },
                banCl: function (cl) {
                    var id = cl.$id;
                    return $q(function (resolve, reject) {
                        var classifiedObject = $firebaseObject(new Firebase(clsUrl + id));
                        classifiedObject.$loaded().then(function () {
                            classifiedObject.banned = true;
                            classifiedObject.$save().then(function () {
                                resolve();
                            })
                        })
                    });
                },
                removeCl: function (cl) {
                    var user = userAuth.profile;
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
                    return true;
                    //return (freeClNumber - len) > 0;
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
