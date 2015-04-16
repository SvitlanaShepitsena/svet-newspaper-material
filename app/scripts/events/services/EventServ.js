(function () {
    'use strict';

    angular.module('events')
        .factory('EventServ', function ($q, url, $firebaseArray, $firebaseObject) {
            var allEventsUrl = url + 'events/'
            return {
                joinUser: function (user, eventKey) {
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/';

                        var eventUsersObj = $firebaseArray(new Firebase(eventUsersUrl));
                        eventUsersObj.$add(user).then(function (ref) {
                            resolve(ref.key);
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
