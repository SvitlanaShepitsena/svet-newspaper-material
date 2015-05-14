(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileLiveServ', function ($q, url, users, $firebaseObject, $firebaseArray, userAuth) {
            var ref = new Firebase(users);
            var unwatch;
            var userPublicProps = [
                'avatar',
                'email',
                'userName',
                'role',
            ];

            function pickUserProps(user) {
                return _.pick(user, userPublicProps);
            }

            return {
                setBinding: function (userKey) {
                    return $q(function (resolve, reject) {
                        var currentUserProfileRef = $firebaseObject(ref.child(userKey).child('profile'));
                        currentUserProfileRef.$loaded(function () {
                            userAuth.profile = pickUserProps(currentUserProfileRef);
                            userAuth.key = userKey;
                            unwatch = currentUserProfileRef.$watch(function () {
                                // Update profile on any change
                                userAuth.profile = pickUserProps(currentUserProfileRef);
                            });
                            resolve(true);
                        })
                    });
                },
                unbind: function () {
                    userAuth = {};
                    unwatch();
                }
            };
        });
})();
