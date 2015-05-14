(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileServ', function (ProfileLiveServ, UserUniqueServ, $q, url, users, $firebaseObject, $firebaseArray, $firebaseAuth) {
            var ref = new Firebase(users);
            var dbUsersArr = $firebaseArray(ref);
            var currentUserProfileRef;
            var unwatch;
            return {
                getProfile: function (authData) {
                    return $q(function (resolve, reject) {
                        dbUsersArr.$loaded().then(function () {
                            var userDbProfile = UserUniqueServ.findDbProfile(authData, dbUsersArr);
                            if (userDbProfile) {
                                ProfileLiveServ.setBinding(userDbProfile.$id).then(function () {
                                    resolve(userDbProfile.profile);
                                });
                            } else {
                                saveProfileToDb(authData,true).then(function (createdUserKey) {
                                    ProfileLiveServ.setBinding(createdUserKey).then(function () {
                                        resolve(createdUserKey);
                                    });

                                });
                            }
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                },
                cleanProfile: function () {
                    ProfileLiveServ.unbind();
                },
                createSvetUser: function (email, password, userName) {
                    var authObj = $firebaseAuth(ref);
                    return $q(function (resolve, reject) {
                        authObj.$createUser({
                            email: email,
                            password: password
                        }).then(function (authData) {
                            authData.userName = userName;
                            authData.email = email;
                            saveProfileToDb(authData, true)
                            resolve(authData);
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                }
            };
            //
            //
            //
            function createSvetLocalProfile(email) {
                var credentials = {
                    email: email,
                    password: '123456'
                };
                return $q(function (resolve, reject) {
                    var authObj = $firebaseAuth(ref);
                    authObj.$createUser(credentials).then(function (userData) {
                        authObj.$resetPassword({email: email}).then(function () {
                            resolve(userData);
                        })
                    }).catch(function (error) {
                        console.error(error);
                        reject(error);
                    })
                });
            }

            function saveProfileToDb(authData, createLocal) {
                return $q(function (resolve, reject) {
                    var user = userProcess(authData);
                    dbUsersArr.$add(user).then(function (ref) {
                        if (!createLocal) {
                            createSvetLocalProfile(user.profile.email).then(function (localUid) {
                                var id = localUid.uid;
                                var user = $firebaseObject(ref);
                                user.$loaded().then(function () {
                                    user.auth.svet.id = id;
                                    user.$save().then(function () {
                                        resolve(localUid);
                                    })
                                })
                            }).catch(function (error) {
                                console.error(error);
                                reject(error);
                            })
                        } else {
                            resolve(ref);
                        }
                    })
                });
            }

            function userNameProcess(displayName) {
                var procName = displayName.toLowerCase();
                procName = procName.replace(/ +?/g, '-');
                return procName;
            }

            function getGoogle(user, authData) {
                user.profile.email = authData.google.email;
                user.profile.userName = userNameProcess(authData.google.displayName);
                user.profile.avatar = authData.google.cachedUserProfile.picture;
                user.auth = {
                    google: authData.google,
                    svet: {email: user.profile.email}
                };
            }

            function getFacebook(user, authData) {
                user.profile.email = authData.facebook.email;
                user.profile.userName = userNameProcess(authData.facebook.displayName);
                user.profile.avatar = authData.facebook.cachedUserProfile.picture.data.url;
                user.auth = {
                    facebook: authData.facebook,
                    svet: {email: user.profile.email}
                };
            }

            function getSvet(user, authData) {
                user.profile.email = authData.email;
                user.profile.userName = authData.userName
                authData.id = authData.uid;
                authData = _.omit(authData, 'uid', 'userName');
                user.auth = {svet: authData};
            }

            function userProcess(authData) {
                var user = {};
                user.profile = {};
                if (authData.provider === 'google') {
                    getGoogle(user, authData);
                }
                if (authData.provider === 'facebook') {
                    getFacebook(user, authData);
                }
                if (!authData.provider) {
                    getSvet(user, authData);
                }
                user.profile.role = 'reader';
                return user;
            }
        });
})();
