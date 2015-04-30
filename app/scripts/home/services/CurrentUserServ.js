(function () {
    'use strict';

    angular.module('home')
        .factory('CurrentUserServ', function (users,$firebaseArray) {
            var currentUser;
            return {
                setUser: function (user) {
                    currentUser = user;
                    if (!currentUser.userName) {
                       var usersArr = $firebaseArray(users) ;
                        usersArr.$loaded().then(function () {
                            var userLocal = _.find(usersArr,{id:user.id});
                            currentUser.userName = userLocal.userName;
                            currentUser.groups = userLocal.groups;
                        })
                    }

                },
                get: function () {
                    return currentUser || null;
                }

            };
        });
})();
