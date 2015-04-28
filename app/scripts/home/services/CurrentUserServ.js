(function () {
    'use strict';

    angular.module('home')
        .factory('CurrentUserServ', function () {
            var currentUser;
            return {

                setUser: function (user) {
                    currentUser = user;

                },
                get: function () {
                    return currentUser || null;
                }

            };
        });
})();
