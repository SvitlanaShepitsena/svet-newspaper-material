(function () {
    'use strict';
    angular.module('auth')
        .filter('Groups', function () {
            return function (users, group) {
                if (!users ||  users.length === 0) {
                    return;
                }
                var filteredUsers = [];
                for (var i = 0; i < users.length; i++) {
                    var user = users[i];
                    var breakPoint = 1;
                    if (user.groups) {
                        if (user.groups.indexOf('manager') > -1) {
                            continue;
                        }
                        var indexOf = user.groups.indexOf(group);
                        if (group === 'all' || indexOf > -1) {
                            filteredUsers.push(user);
                        }
                    }
                }
                return filteredUsers;
            };
        });
})();
