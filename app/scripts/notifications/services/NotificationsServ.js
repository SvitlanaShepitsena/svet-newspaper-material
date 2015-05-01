(function () {
    'use strict';

    angular.module('notifications')
        .factory('NotificationsServ', function ($q, url, users, $firebaseObject, $firebaseArray) {

            return {

                addToCustomers: function (event) {
                    return $q(function (resolve, reject) {
                        var usersArray = $firebaseArray(new Firebase(users));
                        usersArray.$loaded().then(function () {
                            var customers = _.where(usersArray, function (user) {
                                return user.groups.indexOf('customer')>-1;
                            });
                            console.log(customers);

                            resolve(usersArray);
                        })


                    });
                }
            };
        });
})();
