(function () {
    'use strict';
    angular.module('auth')
        .factory('AuthenticationServ', function (ProfileServ, $q, $firebaseAuth, url) {
            var ref = new Firebase(url);
            var authObj = $firebaseAuth(ref);
            return {
                checkUserStatus: function () {
                    return $q(function (resolve, reject) {
                        var loggedInUser = authObj.$getAuth();
                        if (loggedInUser) {
                            ProfileServ.getProfile(loggedInUser).then(function () {
                                resolve();
                            })
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
                            console.log("Logged in as:", authData.uid);
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
                    ProfileServ.logout();
                }
            };
        });
})();
