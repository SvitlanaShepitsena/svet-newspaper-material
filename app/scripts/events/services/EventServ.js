(function () {
    'use strict';

    angular.module('events')
        .factory('EventServ', function ($q, url, $firebaseArray, $firebaseObject) {
            var allEventsUrl = url + 'events/'
            return {
                joinUser: function (user, eventKey) {
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                        var eventUsersObj = $firebaseObject(new Firebase(eventUsersUrl));
                        eventUsersObj[user.id] = user;
                        eventUsersObj.$save().then(function (ref) {
                            resolve(ref.key);
                        })

                    });
                },
                unlinkUser: function (user, eventKey) {
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                        var eventUsersArray = $firebaseArray(new Firebase(eventUsersUrl));
                        eventUsersArray.$loaded().then(function () {
                            var fbUser = eventUsersArray.$getRecord(user.id);
                            eventUsersArray.$remove(fbUser).then(function (ref) {
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
