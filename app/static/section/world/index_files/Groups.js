(function () {
    'use strict';
    angular.module('auth')
        .filter('Groups', function () {
            return function (users, group) {
                if (!users || users.length === 0) {
                    return;
                }
                if (group === 'all') {
                    return _.reject(users,{profile:{role:'manager'}});
                }

                return _.filter(users, function (user) {
                    return user.profile.role === group && user.profile.role!=='manager';
                });
            };
        });
})();
