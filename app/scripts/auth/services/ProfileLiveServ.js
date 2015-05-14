(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileLiveServ', function ($q, url, users, $firebaseObject, $firebaseArray, user) {
            var ref = new Firebase(users);
            var unwatch;
            var userPublicProps=[
                'avatar',
                'email',
                'userName',
                'role',
            ];

            function pickUserProps(user) {
                return _.pick(user,userPublicProps);
            }
            return {
                setBinding: function (userKey) {
                    return $q(function (resolve, reject) {
                        var currentUserProfileRef = $firebaseObject(ref.child(userKey).child('profile'));
                        currentUserProfileRef.$loaded(function () {
                            user.profile = pickUserProps(currentUserProfileRef);
                            user.key = userKey;
                            unwatch = currentUserProfileRef.$watch(function () {
                                // Update profile on any change
                            user.profile = pickUserProps(currentUserProfileRef);
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
