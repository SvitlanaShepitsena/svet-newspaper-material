(function () {
    'use strict';

    angular.module('admin')
        .factory('UserServ', function ($q, url, $firebaseArray, $firebaseObject) {
            var usersUrl = url + 'user-management/users/';
            //var usersArray = $firebaseArray(new Firebase(usersUrl));

            return {
                saveNewUser: function (user) {
                    return $q(function (resolve, reject) {
                        var userId = user.id || user.uid;
                        var usersObj = $firebaseObject(new Firebase(usersUrl));
                        usersObj.$loaded().then(function () {
                            if (!usersObj.$value || !usersObj.$value[userId]) {
                                usersObj[userId] = user;
                                usersObj.$save();

                            }
                        })


                    });
                }
            };
        });
})();
