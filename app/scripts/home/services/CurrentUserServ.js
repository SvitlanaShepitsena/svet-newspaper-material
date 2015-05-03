(function () {
    'use strict';
    angular.module('home')
        .factory('CurrentUserServ', function (users, $firebaseArray, $q) {
            var currentUser;
            return {
                setUser: function (user) {
                    return $q(function (resolve, reject) {
                        if (!user) {
                            resolve();
                        }
                        currentUser = user;
                        if (!currentUser.userName || !currentUser.key) {
                            var usersArr = $firebaseArray(new Firebase(users));
                            usersArr.$loaded().then(function () {
                                var userLocal = _.find(usersArr, {id: user.id|| user.uid});
                                currentUser = _.extend(currentUser, userLocal);
                                resolve(currentUser)
                            })
                        }
                    })
                },
                cleanUser: function () {
                    currentUser = null;
                },
                get: function () {
                    return currentUser || null;
                }
            };
        });
})();
