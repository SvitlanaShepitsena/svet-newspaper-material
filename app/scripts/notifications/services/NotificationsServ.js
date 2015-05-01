(function () {
    'use strict';

    angular.module('notifications')
        .factory('NotificationsServ', function ($q, url, users, $firebaseObject, $firebaseArray,CurrentUserServ) {

            return {
                getUserNotices: function (key) {
                    console.log(key);

                    var noticesUrl = users+key+'/notices';

                    var noticesArray = $firebaseArray(new Firebase(noticesUrl));
                    return noticesArray;

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
                }
            };
        });
})();
