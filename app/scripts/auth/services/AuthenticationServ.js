(function () {
    'use strict';
    angular.module('auth')
        .factory('AuthenticationServ', function ($q, url, $firebaseAuth, ProfileServ) {
            /*reference to Firebase App wrapped inside AngularFire object $FirebaseAuth*/
            var ref = new Firebase(url);
            var authObj = $firebaseAuth(ref);
            return {
                /*user authentication with Firebase*/
                checkUserStatus: function () {
                    return $q(function (resolve, reject) {
                        var authData = authObj.$getAuth();
                        var breakPoint = 1;
                        if (authData) {
                            // if user is  logged in get his local profile
                            ProfileServ.getProfile(authData).then(function (profile) {
                                resolve(profile);
                            })
                        } else {
                            // user is not logged in
                            resolve(null);
                        }
                    });
                },
                /*Firebase authentication with social media, creating a profile*/
                authWithProvider: function (provider) {
                    return $q(function (resolve, reject) {
                        authObj.$authWithOAuthPopup(provider, {scope: 'email'}).then(function (authData) {
                            //console.log("Logged in as:", authData);
                            ProfileServ.getProfile(authData).then(function (profile) {
                                resolve(profile);
                            }).catch(function (error) {
                                reject(error);
                            });
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    });
                },
                /*Firebase authentication with email/password combination, creating a profile*/
                svetLogin: function (email, password) {
                    return $q(function (resolve, reject) {
                        authObj.$authWithPassword({
                            email: email,
                            password: password
                        }).then(function (authData) {
                            ProfileServ.getProfile(authData).then(function (profile) {
                                resolve(profile);
                            }).catch(function (error) {
                                reject(error);
                            })
                        }).catch(function (error) {
                            console.error("Authentication failed:", error);
                        });
                    });
                },
                logout: function () {
                    authObj.$unauth();
                    ProfileServ.cleanProfile();
                }
            };
        });
})();
