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
                            var ref = new Firebase(url);
                            ref.authWithOAuthPopup("google", function (error, authData) {
                                var i = 10;
                            }, {
                                scope: "email"
                            });
                        }
                        if (provider === 'facebook') {
                            var ref = new Firebase(url);
                            ref.authWithOAuthPopup("facebook", function (error, authData) {
                                var i = 10;
                            }, {
                                remember: "sessionOnly",
                                scope: "email"
                            });
                        }
                        ref.authWithOAuthPopup(provider, function (error, authData) {
                            if (error) {
                                console.log("Login Failed!", error);
                            } else {
                                ProfileServ.getProfile(authData).then(function (user) {
                                    resolve(user);
                                })
                            }
                        }, {
                            scope: "email"
                        });
                    });
                }
            };
        });
})();
