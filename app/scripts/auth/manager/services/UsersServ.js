(function () {
    'use strict';
    angular.module('auth.manager')
        .factory('UsersServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(users);
            return {
                allUsersList: function () {
                    var usersArrayRef = $firebaseArray(ref);
                    return usersArrayRef;
                },
                saveUserProperty: function (property, userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = users + userId+'/profile';
                        var userObj = $firebaseObject(new Firebase(userUrl));
                        userObj.$loaded().then(function () {
                            userObj[property.label] = property.value;
                            userObj.$save().then(function (success) {
                                resolve(success)
                            });
                        });
                    });
                },
            };
        });
})();
