(function () {
    'use strict';

    angular.module('auth')
        .factory('ConnectionEventServ', function (NotificationsServ, $q, url, $firebaseArray, $firebaseObject, NoteServ) {
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
                                note:event.title,
                                opened:false
                            };
                            NotificationsServ.addToCustomers(notification).then(function () {
                                resolve();
                            });

                        });
                    });
                },
                addCustomerToEvent: function (event, user) {
                    return $q(function (resolve, reject) {
                        var eventObject = $firebaseObject(new Firebase(eventsCorporateUrl + event.$id));
                        eventObject.$loaded().then(function () {
                            if (!eventObject.customers) {
                                eventObject.customers = [];
                            }
                            eventObject.customers.push(user);
                            eventObject.$save().then(function (uid) {
                                resolve(uid);

                            })
                        })
                    });
                },
                removeCustomerFromEvent: function (event,user) {
                    return $q(function (resolve, reject) {
                        var eventObject = $firebaseObject(new Firebase(eventsCorporateUrl + event.$id));
                        eventObject.$loaded().then(function () {
                            for (var i = 0; i < eventObject.customers.length; i++) {
                                var customer = eventObject.customers[i];
                                if (customer.id === user.id) {
                                    eventObject.customers.splice(i,1);
                                    break;
                                }

                            }

                            eventObject.$save().then(function (uid) {
                                resolve(uid);

                            })
                        })
                    });
                }

            };
        });
})();
