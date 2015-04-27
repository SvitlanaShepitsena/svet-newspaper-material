(function () {
    'use strict';

    angular.module('auth')
        .factory('NoteServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray, corporate) {
            function getCustomerNotifications(userId) {

                return $q(function (resolve, reject) {
                    var eventsArr = $firebaseArray(new Firebase(corporate));
                    eventsArr.$loaded().then(function () {
                        var customerNotices = [];
                        eventsArr.forEach(function (event) {
                            var customerIds = _.pluck(event.customers, 'id');

                            if (customerIds.indexOf(userId) === -1) {
                                customerNotices.push(event);
                            }
                        });
                        resolve(customerNotices);
                    });


                });
            }

            return {

                getNotifications: function (user) {

                    return $q(function (resolve, reject) {
                        var final = [];

                        var groups = user.groups;
                        groups.forEach(function (group) {
                            switch (group) {
                                case 'customer':
                                    getCustomerNotifications(user.id).then(function (notices) {
                                        if (notices.length) {
                                            if (user.notifications) {
                                                notices.forEach(function (notice) {
                                                    user.notifications.push(notice);
                                                });
                                            } else{
                                                user.notifications = notices;
                                            }

                                        }
                                    });
                                    break;

                            }
                        });

                        resolve(user);
                    });
                }


            };
        });
})();
