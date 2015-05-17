(function () {
    'use strict';
    angular.module('auth')
        .factory('ConnectionEventServ', function (NotificationsServ, $q, url, $firebaseArray, $firebaseObject) {

            var eventsCorporateUrl = url + '/events/corporate/';
            var eventsPublicUrl = url + '/events/public/';
            return {
                allCorporate: function () {
                    var eventsArray = $firebaseArray(new Firebase(eventsCorporateUrl));
                    return eventsArray;
                },
                allPublic: function () {
                    var eventsArray = $firebaseArray(new Firebase(eventsCorporateUrl));
                    return eventsArray;
                },
                saveCorporateEvent: function (event) {
                    return $q(function (resolve, reject) {
                        var eventsArray = $firebaseArray(new Firebase(eventsCorporateUrl));
                        eventsArray.$add(event).then(function (uid) {
                            var notification = {
                                note: event.title,
                                timestamp: moment().format('x'),
                                opened: false
                            };
                            NotificationsServ.addToCustomers(notification).then(function () {
                                resolve();
                            });
                        });
                    });
                },
                addCustomerToEvent: function (event, user) {
                    return $q(function (resolve, reject) {
                        var eventArray = $firebaseArray(new Firebase(eventsCorporateUrl + event.$id+'/customers'));
                            eventArray.$add(user).then(function (uid) {
                                var notification = {
                                    note: user.userName + ' accepts ' + event.title,
                                    timestamp: moment().format('x'),
                                    opened: false
                                };
                                NotificationsServ.addToManagers(notification).then(function () {
                                    resolve(uid);
                                });
                            })
                    });
                },
                removeCustomerFromEvent: function (event, user) {
                    return $q(function (resolve, reject) {
                        var eventCustomersArr = $firebaseArray(new Firebase(eventsCorporateUrl + event.$id+'/customers'));
                        eventCustomersArr.$loaded().then(function () {
                            for (var i = 0; i < eventCustomersArr.length; i++) {
                                var customer = eventCustomersArr[i];
                                if (customer.userName === user.userName) {
                                    eventCustomersArr.$remove(customer).then(function () {
                                       resolve()
                                    });
                                    break;
                                }
                            }
                        });
                    });
                }
            };
        });
})();
