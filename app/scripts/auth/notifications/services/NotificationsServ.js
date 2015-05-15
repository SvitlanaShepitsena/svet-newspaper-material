(function () {
    'use strict';
    angular.module('auth.notifications')
        .factory('NotificationsServ', function ($q, url, users, $firebaseObject, $firebaseArray, userAuth) {
            return {
                getUserNotices: function (key) {
                    var noticesUrl = users + key + '/notices';
                    var noticesArray = $firebaseArray(new Firebase(noticesUrl));
                    return noticesArray;
                },
                markNoticeOpened: function (notice) {
                    var userKey = userAuth.profile.key;
                    var noticeUrl = users + userKey + '/notices/' + notice.$id;
                    return $q(function (resolve, reject) {
                        var noticeObject = $firebaseObject(new Firebase(noticeUrl));
                        noticeObject.$loaded().then(function () {
                            noticeObject.opened = true;
                            noticeObject.$save().then(function () {
                                resolve();
                            })
                        })
                    });
                },
                markAllNoticesOpened: function () {
                    var userKey = userAuth.profile.key;
                    var noticeUrl = users + userKey + '/notices/';
                    return $q(function (resolve, reject) {
                        var noticesArray = $firebaseArray(new Firebase(noticeUrl));
                        noticesArray.$loaded().then(function () {
                            noticesArray.forEach(function (notice) {
                                notice.opened = true;
                                noticesArray.$save(notice);
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
                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                var user = usersObj[key];
                                if (user.groups.indexOf('customer') > -1) {
                                    if (!user.notices) {
                                        user.notices = [];
                                    }
                                    if (!_.contains(user.notices, event)) {
                                        user.notices.push(event);
                                    }
                                }
                            }
                            usersObj.$save().then(function () {
                                resolve()
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
                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                var user = usersObj[key];
                                if (user.groups.indexOf('manager') > -1) {
                                    if (!user.notices) {
                                        user.notices = [];
                                    }
                                    if (!_.contains(user.notices, event)) {
                                        user.notices.push(event);
                                    }
                                }
                            }
                            usersObj.$save().then(function () {
                                resolve()
                            });
                        })
                    });
                }
            };
        });
})();
