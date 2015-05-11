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
                        ref.authWithOAuthPopup(provider, function (error, authData) {
                            if (error) {
                                console.log("Login Failed!", error);
                            } else {
                                // the access token will allow us to make Open Graph API calls
                                console.log(authData.facebook.accessToken);
                                resolve(authData.facebook);
                            }
                        }, {
                            scope: "email,user_likes" // the permissions requested
                        });
                    });
                }
            };
        });
})();
