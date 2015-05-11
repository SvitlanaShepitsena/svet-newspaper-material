(function () {
    'use strict';
    angular.module('auth')
        .factory('CurrentUserServ', function (users, $firebaseArray, $firebaseObject, $q, NewUserProcessServ, $timeout) {
            var currentUser;
            return {
                setUser: function (user) {
                    return $q(function (resolve, reject) {
                        if (!user) {
                            resolve();
                        }
                        currentUser = user;
                        //if (!currentUser.userName || !currentUser.key) {
                        var usersArr = $firebaseArray(new Firebase(users));
                        usersArr.$loaded().then(function () {
                            var userLocal = _.find(usersArr, {uid: user.id || user.uid});
                            if (!userLocal) {
                                currentUser = NewUserProcessServ.unify(currentUser);
                                usersArr.$add(currentUser).then(function (ref) {
                                    userLocal = $firebaseObject(ref);
                                    userLocal.$loaded().then(function () {
                                        userLocal.key = ref.key();
                                        userLocal.$save().then(function (ref) {
                                            currentUser = userLocal;
                                            resolve(userLocal);
                                        });
                                    })
                                })
                            } else {
                                currentUser = _.extend(currentUser, userLocal);
                                resolve(currentUser)
                            }
                        })
                        //}
                    })
                },
                cleanUser: function () {
                    currentUser = null;
                },
                get: function () {
                    return currentUser || null;
                },
                getAssync: function () {
                    return $q(function (resolve) {
                    })
                }
            };
        });
})();
