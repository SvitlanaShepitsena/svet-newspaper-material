(function () {
    'use strict';

    angular.module('home')
        .factory('CurrentUserServ', function (users,$firebaseArray) {
            var currentUser;
            return {
                setUser: function (user) {
                    if (!user) {
                        return;
                    }
                    currentUser = user;
                    if (!currentUser.userName || !currentUser.key) {
                       var usersArr = $firebaseArray(new Firebase(users)) ;
                        usersArr.$loaded().then(function () {
                            var userLocal = _.find(usersArr,{id:user.id});
                            currentUser.userName = userLocal.userName;
                            currentUser.groups = userLocal.groups;
                            currentUser.key = userLocal.key;
                        })
                    }

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
