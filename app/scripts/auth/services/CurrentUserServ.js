(function () {
    'use strict';
    angular.module('sections.home')
        .factory('CurrentUserServ', function (NewUserProcessServ, users, $firebaseArray, $q) {
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
                                var userLocal = _.find(usersArr, {id: user.id || user.uid});
                                if (!userLocal) {



                                    usersArr.$add(currentUser).$save().then(function (ref) {
                                        userLocal = $firebaseObject(ref);
                                        userLocal.$loaded().then(function () {
                                            currentUser=userLocal;
                                            resolve(currentUser);
                                        })
                                    })
                                } else {
                                    currentUser = _.extend(currentUser, userLocal);
                                    resolve(currentUser)
                                }
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
