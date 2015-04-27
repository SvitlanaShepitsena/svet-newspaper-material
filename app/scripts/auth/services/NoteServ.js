(function () {
    'use strict';

    angular.module('auth')
        .factory('NoteServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray, corporate) {
            function getCustomerNotifications(userId) {

                return $q(function (resolve, reject) {
                    var notifications = [];
                    var eventsArr = $firebaseArray(new Firebase(corporate));
                    eventsArr.$loaded().then(function () {
                        eventsArr.forEach(function (event) {
                            var customerIds = _.pluck(event.customers,'id');
                            console.log(customerIds);
                        })
                    })


                });
            }

            return {

                getNotifications: function (user) {

                    return $q(function (resolve, reject) {
                        var notifications = [];

                        var groups = user.groups;
                        groups.forEach(function (group) {
                            switch (group) {
                                case 'customer':
                                    getCustomerNotifications(user.id).then(function (notices) {
                                        notifications = _.union(notices);
                                    });
                                    break;

                                default:
                            }
                        })
                        resolve(notifications);
                    });
                },


            };
        });
})();
