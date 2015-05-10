(function () {
    'use strict';
    angular.module('auth')
        .factory('NewUserProcessServ', function () {
            return {
                unify: function (user) {
                    if (user.id) {
                        user.uid = user.id;
                    }
                    if (!user.groups) {
                        user.groups = ['reader'];
                    }
                    if (!user.userName) {
                        user.userName = user.fname;
                    }
                    return user;
                }
            };
        });
})();
