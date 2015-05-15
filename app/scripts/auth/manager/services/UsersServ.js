(function () {
    'use strict';
    angular.module('auth.manager')
        .factory('UsersServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(users);
            return {
                allUsersList: function () {
                    var usersArrayRef = $firebaseArray(ref);
                    return usersArrayRef;
                }
            };
        });
})();
