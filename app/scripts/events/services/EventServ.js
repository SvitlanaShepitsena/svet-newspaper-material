(function () {
    'use strict';

    angular.module('events')
        .factory('EventServ', function ($q, url, $firebaseArray, $firebaseObject, NotificationsServ) {
            var allEventsUrl = url + 'events/public/'
            return {
                joinUser: function (user, event) {
                    var eventKey=event.$id;
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/';

                        var eventUsersObj = $firebaseArray(new Firebase(eventUsersUrl));

                        var shortUser = _.pick(user.profile, 'userName', 'avatar');

                        eventUsersObj.$add(shortUser).then(function (ref) {

                            var notification = {
                                note: event.title,
                                timestamp: moment().format('x'),
                                user:user.profile.userName,
                                opened: false
                            };
                            NotificationsServ.addToManagers(notification).then(function () {
                                resolve();
                            });
                        })

                    });
                },
                unlinkUser: function (user, eventKey) {
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                        var eventUsersArray = $firebaseArray(new Firebase(eventUsersUrl));
                        eventUsersArray.$loaded().then(function () {

                            var foundUser = _.find(eventUsersArray, {'id': user.id});

                            eventUsersArray.$remove(foundUser).then(function (ref) {
                                resolve(ref);
                            })

                        })

                    });
                },
                getUsersArrayRef: function (eventKey) {
                    var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                    var eventUsersRef = $firebaseArray(new Firebase(eventUsersUrl));

                    return eventUsersRef;

                },
                getUsersObjectRef: function (eventKey) {
                    var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                    var eventUsersRef = $firebaseObject(new Firebase(eventUsersUrl));

                    return eventUsersRef;

                }
            };
        });
})();
