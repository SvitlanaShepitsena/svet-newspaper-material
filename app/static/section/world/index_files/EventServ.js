(function () {
    'use strict';

    angular.module('events')
        .factory('EventServ', function ($q, url, $firebaseArray, $firebaseObject, NotificationsServ) {
            var allEventsUrl = url + 'events/public/'
            return {
                joinUser: function (user, event) {
                    var eventKey = event.$id;
                    return $q(function (resolve, reject) {
                        var eventUsersUrl = allEventsUrl + eventKey + '/users/';

                        var eventUsersObj = $firebaseArray(new Firebase(eventUsersUrl));

                        var shortUser = _.pick(user.profile, 'userName', 'avatar');

                        eventUsersObj.$add(shortUser).then(function (ref) {

                            var notification = {
                                note: shortUser.userName.toUpperCase() + ' accepts ' + event.title,
                                timestamp: moment().format('x'),
                                opened: false,
                                eid: event.$id
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

                            var foundUsers = _.filter(eventUsersArray, {'userName': user.profile.userName});

                            for (var i = 0; i < foundUsers.length; i++) {
                                var userForRemoval = foundUsers[i];
                                (function (userObj) {
                                    eventUsersArray.$remove(userObj);
                                })(userForRemoval);

                            }
                            resolve();

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
