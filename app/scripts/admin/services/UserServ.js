(function () {
    'use strict';

    angular.module('admin')
        .factory('UserServ', function ($q, url, $firebaseArray, $firebaseObject) {
            var usersUrl = url + 'user-management/users/';


            function addToUsersGroup(user) {
                user.groups = ['reader'];
                return user;
            }

            return {
                saveNewUser: function (user) {
                    user = addToUsersGroup(user);
                    return $q(function (resolve, reject) {
                        var userId = user.id || user.uid;
                        var usersObj = $firebaseObject(new Firebase(usersUrl));
                        usersObj.$loaded().then(function () {
                            if (!usersObj || !usersObj[userId]) {
                                usersObj[userId] = user;
                                usersObj.$save().then(function (uid) {
                                    resolve(uid);
                                });
                            } else {
                                resolve(userId);
                            }
                        });


                    });
                }
            };
        });
})();
