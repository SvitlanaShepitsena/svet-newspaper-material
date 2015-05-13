(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileLiveServ', function ($q, url, users, $firebaseObject, $firebaseArray, user) {
            var ref = new Firebase(users);
            var unwatch;
            return {
                setBinding: function (userKey) {
                    return $q(function (resolve, reject) {
                        var currentUserProfileRef = $firebaseObject(ref.child(userKey).child('profile'));
                        currentUserProfileRef.$loaded(function () {
                            user.profile = currentUserProfileRef;
                            user.key = userKey;
                            unwatch = currentUserProfileRef.$watch(function () {
                                // Update profile on any change
                                user.profile = currentUserProfileRef;
                            });
                            resolve(true);
                        })
                    });
                },
                unbind: function () {
                    user.profile = null;
                    unwatch();
                }
            };
        });
})();
