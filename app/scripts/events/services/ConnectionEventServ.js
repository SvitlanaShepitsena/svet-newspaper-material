(function () {
    'use strict';
    angular.module('events')
        .factory('ConnectionEventServ', function (NotificationsServ, $q, url, $firebaseArray, $firebaseObject, svetEventsConst) {
            var eventsCorporateUrl = url + '/events/corporate/';
            var eventsPublicUrl = url + '/events/public/';

            function formatEvent(event) {
                var date = moment(event.date);

                var startHour = moment(event.startsAt).hour();
                var startMinutes = moment(event.startsAt).minute();

                var startMoment = date.startOf('day').add({h: startHour, m: startMinutes});

                event = _.omit(event, 'date', 'startsAt', 'endsAt');
                event.startsAt = startMoment.format('x');
                event.endsAt = startMoment.add(2, 'h').startOf('hour').format('x');
                return event;
            }

            function preprocess(events) {
                for (var i = 0; i < events.length; i++) {
                    var event = events[i];
                    event.svId=event.$id;
                    event.startsAt = moment(event.startsAt, 'x').toDate();
                    event.endsAt = moment(event.endsAt, 'x').toDate();
                }
                return events;
            }

            function preprocessWithKey(events, key) {
                for (var i = 0; i < events.length; i++) {
                    var event = events[i];
                    if (event.$id === key) {
                        event.startsAt = moment(event.startsAt, 'x').toDate();
                        event.endsAt = moment(event.endsAt, 'x').toDate();
                    }
                }
                return events;
            }

            return {
                get: function (id) {
                    var eventUrl = eventsPublicUrl + id;
                    var ref = new Firebase(eventUrl);
                    var eventObj = $firebaseObject(ref);
                    return eventObj;
                },
                setEventsLive: function () {
                    return $q(function (resolve, reject) {
                        var eventsArr = $firebaseArray(new Firebase(eventsPublicUrl));
                        eventsArr.$loaded(function () {
                            svetEventsConst.evts = preprocess(eventsArr);
                            console.log(eventsArr);
                            //eventsArr.$watch(function (change) {
                            //    var processedEvent = preprocess(eventsArr, change.key);
                            //    svetEventsConst.evts = processedEvent;
                            //});
                            resolve();
                        })
                    });
                },
                removePublicWithKey: function (key) {
                    return $q(function (resolve, reject) {
                        var publicEvt = $firebaseObject(new Firebase(eventsPublicUrl + key));
                        publicEvt.$remove().then(function () {
                            resolve();
                        });
                    });
                },
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
                        eventsArray.$add(event).then(function (ref) {
                            var notification = {
                                note: event.title,
                                timestamp: moment().format('x'),
                                opened: false,
                                eid: ref.key()
                            };
                            NotificationsServ.addToCustomers(notification).then(function () {
                                resolve();
                            });
                        });
                    });
                },
                savePublicEvent: function (event) {
                    event = formatEvent(event);
                    return $q(function (resolve, reject) {
                        if (event.$id) {
                            var eventObj = $firebaseObject(new Firebase(eventsPublicUrl + event.$id));
                            eventObj.$loaded().then(function () {
                                _.extend(eventObj, event);
                                eventObj.$save().then(function () {
                                    resolve();
                                });
                            })
                        } else {
                            var eventsArray = $firebaseArray(new Firebase(eventsPublicUrl));
                            eventsArray.$add(event).then(function (ref) {

                                if (event.type === 'connection') {
                                    var notification = {
                                        note: event.title,
                                        timestamp: moment().format('x'),
                                        opened: false,
                                        eid: ref.key()
                                    };
                                    NotificationsServ.addToCustomers(notification).then(function () {
                                        resolve();
                                    });
                                }  else{
                                    resolve();
                                }

                            });
                        }
                    });
                },
                addCustomerToEvent: function (event, user) {
                    return $q(function (resolve, reject) {
                        var eventArray = $firebaseArray(new Firebase(eventsCorporateUrl + event.$id + '/customers'));
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
                        var eventCustomersArr = $firebaseArray(new Firebase(eventsCorporateUrl + event.$id + '/customers'));
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
