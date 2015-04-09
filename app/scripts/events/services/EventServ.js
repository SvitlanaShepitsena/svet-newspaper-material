(function () {
    'use strict';

    angular.module('events')
        .factory('EventServ', function ($q, url, $firebaseArray) {
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


                }
            };
        });
})();
