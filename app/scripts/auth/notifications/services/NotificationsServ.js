(function () {
    'use strict';
    angular.module('auth.notifications')
        .factory('NotificationsServ', function ($q, url, users, $firebaseObject, $firebaseArray, userAuth) {
            var ref = new Firebase(users);

            function addNotificationsToAll(keys, usersObj, event) {
                var promises = [];

                angular.forEach(keys, function (key) {
                    var user = usersObj[key];
                    if (user.profile.role === 'customer') {
                            var userNotificationsRef = ref.child(key).child("profile").child('notifications');
                            var notificationsArr = $firebaseArray(userNotificationsRef);
                            notificationsArr.$add(event);
                            promises.push(notificationsArr.$save());
                        }
                    });
                    return $q.all(promises);
                }

                return {
                    markNotificationOpened: function (notification) {
                        var userKey = userAuth.profile.key;
                        var notificationUrl = users + userKey + '/profile/notifications/' + notification.$id;
                        return $q(function (resolve, reject) {
                            var notificationObject = $firebaseObject(new Firebase(notificationUrl));
                        notificationObject.$loaded().then(function () {
                            notificationObject.opened = true;
                            notificationObject.$save().then(function () {
                                resolve();
                            })
                        })
                    });
                },
                markAllNotificationsOpened: function () {
                    var userKey = userAuth.profile.key;
                    var notificationUrl = users + userKey + '/profile/notifications/';
                    return $q(function (resolve, reject) {
                        var notificationsArray = $firebaseArray(new Firebase(notificationUrl));
                        notificationsArray.$loaded().then(function () {
                            notificationsArray.forEach(function (notification) {
                                notification.opened = true;
                                notificationsArray.$save(notification);
                            });
                        })
                    });
                },
                addToCustomers: function (event) {
                    return $q(function (resolve, reject) {
                        var usersObj = $firebaseObject(new Firebase(users));
                        usersObj.$loaded().then(function () {
                            var keys = _.chain(usersObj).keysIn().filter(function (key) {
                                return !_.startsWith(key, '$') && key !== 'forEach';
                            }).value();
                            addNotificationsToAll(keys, usersObj, event, resolve).then(function (resolvedArray) {
                                console.log(resolvedArray);
                            }).catch(function (error) {
                                console.log(error);
                            });
                        })
                    });
                },
                addToManagers: function (event) {
                    return $q(function (resolve, reject) {
                        var promises = [];
                        var usersObj = $firebaseObject(new Firebase(users));
                        usersObj.$loaded().then(function () {
                            var keys = _.chain(usersObj).keysIn().filter(function (key) {
                                return !_.startsWith(key, '$') && key !== 'forEach';
                            }).value();
                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                var user = usersObj[key];
                                if (user.profile.role === ('manager')) {
                                    var userNotificationsRef = ref.child(key).child("profile").child('notifications');
                                    var notificationsArr = $firebaseArray(userNotificationsRef);
                                    notificationsArr.$add(event);
                                    var saveProfise = notificationsArr.$save();
                                    promises.push(saveProfise);
                                }
                            }
                            $q.all(promises).then(function () {
                                resolve();
                            })
                        })
                    });
                }
            };
        });
})();
