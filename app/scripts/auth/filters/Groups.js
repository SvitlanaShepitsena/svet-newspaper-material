(function () {
    'use strict';

    angular.module('auth')
        .filter('Groups', function () {
            return function (users, group) {
                if (!users || users.length === 0) {
                    return;
                }
                if (!group) {
                    return users;
                }
                var filteredUsers = [];
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                    if (user.groups) {

                    var indexOf = user.groups.indexOf(group);
                    if (indexOf > -1) {
                        filteredUsers.push(user);
                    }
                    }
                }
                return filteredUsers;
            };
        });
})();
