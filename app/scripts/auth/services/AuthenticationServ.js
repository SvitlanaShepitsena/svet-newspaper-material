(function () {
    'use strict';
    angular.module('auth')
        .factory('AuthenticationServ', function (ProfileServ, $q, $firebaseAuth, url) {
            var ref = new Firebase(url);
            var authObj = $firebaseAuth(ref);
            return {
                getProfile: function () {
                    return $q(function (resolve, reject) {
                        var ref = new Firebase(url);
                        var authUser = authObj.$getAuth();
                        var breakPoint = 1;
                        resolve();
                    });
                },
                authWithProvider: function (provider) {
                    return $q(function (resolve, reject) {
                        if (provider === 'google') {
                            authObj.$authWithOAuthPopup("google", {scope: 'email'}).then(function (authData) {
                                console.log("Logged in as:", authData);
                                resolve();
                            }).catch(function (error) {
                                console.error("Authentication failed:", error);
                            });
                        }
                        if (provider === 'facebook') {
                            ref = new Firebase(url);
                            ref.authWithOAuthPopup("facebook", function (error, authData) {
                                console.log("Logged in as:", authData);
                                resolve();
                            }, {
                                scope: "email"
                            });
                        }
                    });
                }
            };
        });
})();
