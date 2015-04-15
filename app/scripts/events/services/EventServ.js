(function () {
    'use strict';

    angular.module('events')
        .factory('EventServ', function ($q, url, $firebaseArray, $firebaseObject) {
            var allEventsUrl = url + 'events/'
            return {
                joinUser: function (user, eventKey) {
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                        var eventUsersRef = $firebaseArray(new Firebase(eventUsersUrl));
                            eventUsersRef.$add(user).then(function (uid) {
                            resolve(uid);
                        });

                    });
                },
                unlinkUser: function (user, eventKey) {
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                        var eventUsersRef = $firebaseArray(new Firebase(eventUsersUrl));
                        eventUsersRef.$loaded().then(function (users) {
                            var foundUser = _.find(users,{'id':user.id});

                            eventUsersRef.$remove(foundUser).then(function (uid) {
                                resolve(uid);
                            });
                        })


                    });
                },
                getUsersArrayRef: function (eventKey) {
                    var eventUsersUrl = allEventsUrl + eventKey + '/users/'
                    var eventUsersRef = $firebaseArray(new Firebase(eventUsersUrl));

                    return eventUsersRef;

                }
            };
        });
})();
