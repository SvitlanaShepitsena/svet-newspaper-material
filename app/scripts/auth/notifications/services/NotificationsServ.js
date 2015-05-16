(function () {
    'use strict';
    angular.module('auth.notifications')
        .factory('NotificationsServ', function ($q, url, users, $firebaseObject, $firebaseArray, userAuth) {
            var ref = new Firebase(users);

            function addNotificationsToUserType(keys, usersObj, event, userType) {

                var promises = [];
                angular.forEach(keys, function (key) {
                    var user = usersObj[key];
                    if (user.profile.role === userType) {
                        var userNotificationsRef = ref.child(key).child("profile").child('notifications');
                        var notificationsArr = $firebaseArray(userNotificationsRef);
                        var addPromise = notificationsArr.$add(event);
                        promises.push(addPromise);
                    }
                });
                return $q.all(promises);
            }

            return {
                markNotificationOpened: function (notification) {
                    var userKey = userAuth.key;
                    var notificationUrl = users + userKey + '/profile/notifications/' + notification;
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
                    var userKey = userAuth.key;
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
                            addNotificationsToUserType(keys, usersObj, event, 'customer').then(function (resolvedArray) {
                                resolve(resolvedArray);
                            }).catch(function (error) {
                                reject(error);
                            });
                        })
                    });
                },
                addToManagers: function (event) {
                    return $q(function (resolve, reject) {
                        var usersObj = $firebaseObject(new Firebase(users));
                        usersObj.$loaded().then(function () {
                            var keys = _.chain(usersObj).keysIn().filter(function (key) {
                                return !_.startsWith(key, '$') && key !== 'forEach';
                            }).value();
                            addNotificationsToUserType(keys, usersObj, event, 'manager').then(function (resolvedArray) {
                                resolve(resolvedArray);
                            }).catch(function (error) {
                                reject(error);
                            });
                        })
                    });
                }
            };
        });
})();
