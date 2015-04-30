(function () {
    'use strict';
    angular.module('admin')
        .factory('UserServ', function ($q, url, $firebaseArray, $firebaseObject, users) {
            var usersUrl = url + 'user-management/users/';

            function addToReadersGroup(user) {
                user.groups = ['reader'];
                if (user.fname) {
                    user.userName = user.fname;
                }
                return user;
            }

            return {
                all: function () {
                    var usersArrayRef = $firebaseArray(new Firebase(usersUrl));
                    return usersArrayRef;
                },
                saveNewUser: function (user) {
                    user = addToReadersGroup(user);
                    return $q(function (resolve, reject) {
                        var usersArr = $firebaseArray(new Firebase(usersUrl));
                        usersArr.$add(user).then(function (ref) {
                            resolve(ref.key());

                        });
                    });
                },
                isUserNameUnique: function (userName) {
                    return $q(function (resolve, reject) {
                        var userNamesArray = $firebaseArray(new Firebase(users));
                        userNamesArray.$loaded().then(function () {
                            for (var i = 0; i < userNamesArray.length; i++) {
                                var user = userNamesArray[i];
                                if (user.userName.toLocaleLowerCase() === userName.toLocaleLowerCase()) {
                                    reject();
                                }
                            }
                            resolve();
                        })
                    });
                },
                selectPublicProperties: function (user) {
                    var publicProp = [];
                    var fname = user.fname ? user.fname : '';
                    var lname = user.fname ? user.lname : '';
                    var userName = user.fname ? user.fname : '';
                    publicProp.push({label: 'fname', value: fname});
                    publicProp.push({label: 'lname', value: lname});
                    publicProp.push({label: 'uname', value: userName});
                    return publicProp;
                },
                saveUserProperty: function (property, userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = usersUrl + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));
                        userObj.$loaded().then(function () {
                            userObj[property.label] = property.value;
                            userObj.$save().then(function (success) {
                                resolve(success)
                            });
                        });
                    });
                },
                addUserCl: function (userId, cl, id) {
                    return $q(function (resolve, reject) {
                        var userUrl = usersUrl + userId + '/cls/';
                        var userObj = $firebaseObject(new Firebase(userUrl));
                        userObj.$loaded().then(function () {
                            userObj[id] = cl;
                            userObj.$save().then(function (success) {
                                resolve(success);
                            });
                        });
                    });
                },
                removeUserCl: function (userId, cl) {
                    return $q(function (resolve, reject) {
                        var userClsUrl = usersUrl + userId + '/cls/' + cl.$id;
                        var userObj = $firebaseObject(new Firebase(userClsUrl));
                        userObj.$loaded().then(function () {
                            userObj.$remove().then(function (success) {
                                resolve(success);
                            });
                        });
                    });
                }
            };
        });
})();
