(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthServ', function ($firebaseAuth, url, $q, $rootScope) {

            var mainRef = new Firebase(url);

            function processUserFb(data) {
                var user = {};
                user.id = data.facebook.cachedUserProfile.id;
                user.fname = data.facebook.cachedUserProfile.first_name;
                user.lname = data.facebook.cachedUserProfile.last_name;
                user.url = data.facebook.cachedUserProfile.link;
                user.avatar = data.facebook.cachedUserProfile.picture.data.url;
                return user;
            }

            function processUserGoogle(data) {
                var user = {};
                user.id = data.google.cachedUserProfile.id;
                user.fname = data.google.cachedUserProfile.given_name;
                user.lname = data.google.cachedUserProfile.family_name;
                user.url = data.google.cachedUserProfile.link;
                user.avatar = data.google.cachedUserProfile.picture;
                return user;
            }

            return {
                getObj: function () {
                    return $firebaseAuth(mainRef);
                },
                authProvider: function (provider) {
                    var deferred = $q.defer();

                    this.getObj().$authWithOAuthPopup(provider).then(function (data) {

                        if (provider === 'facebook') {
                            var user = processUserFb(data);
                        }
                        if (provider === 'google') {
                            var user = processUserGoogle(data);
                        }
                        deferred.resolve(user);
                    }).catch(function (error) {
                        deferred.reject();
                        console.log(error);

                    })

                    return deferred.promise;

                },

                logout: function () {
                    $rootScope.user = null;

                    var authObj = this.getObj();
                    authObj.$unauth();

                },

                getUser: function () {
                    var deferred = $q.defer();

                    var user;
                    var data = this.getObj().$getAuth();

                    if (data) {
                        if (data.google) {
                            user = processUserGoogle(data);
                        }

                        if (data.facebook) {
                            user = processUserFb(data);
                        }
                    } else {

                        user = null;
                    }
                    deferred.resolve(user);

                    return deferred.promise;
                },

                createUser: function (email, password) {
                    var that = this;

                    var deferred = $q.defer();

                    var newUser = this.getObj().$createUser({email: email, password: password});

                    newUser.then(function () {

                        that.getObj().$authWithPassword({
                            email: email,
                            password: password
                        }).then(function (authData) {
                            console.log(authData);
                            deferred.resolve(authData);
                        }).catch(function (error) {
                            deferred.reject(error);
                            console.error("Error: ", error);
                        });


                    })


                    return deferred.promise;
                }

            };
        });
})
();
