(function () {
    'use strict';
    angular.module('auth')
        .factory('UserUniqueServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(users);

            function findForGoogle(user, dbUsers) {
                for (var i = 0; i < dbUsers.length; i++) {
                    var dbUser = dbUsers[i];
                    if (dbUser.auth.google) {
                        if (dbUser.auth.google.id === user.google.id) {
                            return dbUser;
                        }
                    }
                    if (dbUser.auth.svet) {
                        if (dbUser.auth.svet.email.toLowerCase() === user.google.email.toLowerCase()) {
                            var dbUserObj = $firebaseObject(ref.child(dbUser.$id));
                            dbUserObj.$loaded().then(function () {
                                dbUserObj.auth.google = user;
                                dbUserObj.profile.avatar = dbUserObj.profile.avatar ? dbUserObj.profile.avatar : user.google.cachedUserProfile.picture
                                dbUserObj.$save();
                            })
                            return dbUser;
                        }
                    }
                }
            }

            function findForFacebook(user, dbUsers) {
                for (var i = 0; i < dbUsers.length; i++) {
                    var dbUser = dbUsers[i];
                    if (dbUser.auth.facebook) {
                        if (dbUser.auth.facebook.id === user.facebook.id) {
                            return dbUser;
                        }
                    }
                    if (dbUser.auth.svet) {
                        if (dbUser.auth.svet.email.toLowerCase() === user.facebook.email.toLowerCase()) {
                            var dbUserObj = $firebaseObject(ref.child(dbUser.$id));
                            dbUserObj.$loaded().then(function () {
                                dbUserObj.auth.facebook = user;
                                dbUserObj.profile.avatar = dbUserObj.profile.avatar ? dbUserObj.profile.avatar : user.facebook.cachedUserProfile.picture.data.url
                                dbUserObj.$save();
                            })
                            return dbUser;
                        }
                    }
                }
            }

            function findForSvet(user, dbUsers) {
                for (var i = 0; i < dbUsers.length; i++) {
                    var dbUser = dbUsers[i];
                    if (dbUser.auth.svet) {
                        if (dbUser.auth.svet.email.toLowerCase() === user.password.email.toLowerCase()) {
                            return dbUser;
                        }
                    }
                }
            }

            return {
                findDbProfile: function (user, dbUsers) {
                    var foundUser;
                    if (user.provider === 'google') {
                        foundUser = findForGoogle(user, dbUsers);
                        var breakPoint = 1;
                    }
                    if (user.provider === 'facebook') {
                        foundUser = findForFacebook(user, dbUsers);
                        var breakPoint = 1;
                    }
                    if (user.provider === 'password') {
                        foundUser = findForSvet(user, dbUsers);
                        var breakPoint = 1;
                    }
                    return foundUser;
                },
                isUserNameUnique: function (userName) {
                    return $q(function (resolve, reject) {
                        var userNamesArray = $firebaseArray(new Firebase(users));
                        userNamesArray.$loaded().then(function () {
                            for (var i = 0; i < userNamesArray.length; i++) {
                                var user = userNamesArray[i];
                                if (!user.profile.userName) {
                                    continue;
                                }
                                if (user.profile.userName.toLowerCase() === userName.toLowerCase()) {
                                    reject();
                                }
                            }
                            resolve();
                        })
                    });
                },
            };
        });
})();
