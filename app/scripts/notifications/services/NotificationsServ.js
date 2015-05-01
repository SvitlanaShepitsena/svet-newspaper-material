(function () {
    'use strict';

    angular.module('notifications')
        .factory('NotificationsServ', function ($q, url, users, $firebaseObject, $firebaseArray) {

            return {

                addToCustomers: function (event) {
                    return $q(function (resolve, reject) {
                        var usersArray = $firebaseArray(new Firebase(users));
                        usersArray.$loaded().then(function () {
                            usersArray.forEach(function (user, index) {
                                if (user.groups.indexOf('customer') > -1) {

                                    if (!user.notices) {
                                        user.notices = [];
                                    }
                                    if (!_.contains(user.notices, event)) {
                                        user.notices.push(event);
                                        usersArray.$save(user);
                                    }

                                }
                            })
                            resolve();

                        })


                    });
                }
            };
        });
})();
