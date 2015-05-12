(function () {
    'use strict';
    angular.module('auth')
        .factory('UserUniqueServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            function findForGoogle(user, dbUsers) {
                for (var i = 0; i < dbUsers.length; i++) {
                    var dbUser = dbUsers[i];
                    if (dbUser.auth.google) {
                        if (dbUser.auth.google.id=== user.google.id) {
                            return dbUser;
                        }
                    }

                    if (dbUser.auth.svet) {
                        if (dbUser.auth.svet.email=== user.google.email) {
                            return dbUser;
                        }
                    }
                }
            }

            function findForFb(user, dbUsers) {
                var foundUser;
                return foundUser;
            }

            function findForSvet(user, dbUsers) {
                var foundUser;
                return foundUser;
            }

            return {
                find: function (user, dbUsers) {
                    var foundUser;
                    if (user.provider === 'google') {
                        foundUser = findForGoogle(user, dbUsers);
                        var breakPoint = 1;
                    }
                    return foundUser;
                }
            };
        });
})();
