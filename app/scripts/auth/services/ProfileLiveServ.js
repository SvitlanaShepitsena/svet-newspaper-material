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
                            userAuth.profile = (currentUserProfileRef);
                            userAuth.key = userKey;
                            unwatch = currentUserProfileRef.$watch(function () {
                                console.log('changes');
                                // Update profile on any change
                                userAuth.profile = (currentUserProfileRef);
                                console.log(userAuth.profile);
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
