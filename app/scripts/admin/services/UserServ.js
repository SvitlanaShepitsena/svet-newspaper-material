(function () {
    'use strict';

    angular.module('admin')
        .factory('UserServ', function ($q, url, $firebaseArray, $firebaseObject) {
            var usersUrl = url + 'user-management/users/';


            function addToReadersGroup(user) {
                user.groups = ['reader'];
                if (user.fname) {
                    user.name = user.fname;
                }
                return user;
            }

            return {
                saveNewUser: function (user) {
                    user = addToReadersGroup(user);
                    return $q(function (resolve, reject) {
                        var userId = user.id || user.uid;
                        user.id = userId;
                        var usersObj = $firebaseObject(new Firebase(usersUrl));
                        usersObj.$loaded().then(function () {
                            if (!usersObj || !usersObj[userId]) {
                                usersObj[userId] = user;
                                usersObj.$save().then(function (uid) {
                                    resolve({uid: user.name, firstLogin: true});
                                });
                            } else {
                                resolve({uid: user.name, firstLogin: false});
                            }
                        });


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
                }
            };
        });
})();
