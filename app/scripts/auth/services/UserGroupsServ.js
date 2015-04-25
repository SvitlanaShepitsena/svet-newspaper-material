(function () {
    'use strict';

    angular.module('auth')
        .factory('UserGroupsServ', function ($q, url, $firebaseObject, $firebaseArray, $rootScope) {
            var usersUrl = url + '/user-management/users/';
            return {

                getGroups: function (userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = usersUrl + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            resolve(userObj.groups);
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });


                    });
                },
                toggleUserInGroup: function (user, group) {
                    return $q(function (resolve, reject) {


                        var userObject = $firebaseObject(new Firebase(usersUrl + user.id));

                        userObject.$loaded().then(function () {
                            if (userObject.groups) {

                                var index = userObject.groups.indexOf(group);

                                if (index > -1) {
                                    userObject.groups.splice(index, 1);
                                } else {
                                    userObject.groups.push(group);
                                }
                            } else {
                                userObject.groups = [group];
                            }
                            userObject.$save().then(function (success) {
                                resolve(success);
                            })
                        }).catch(function (error) {
                            reject(error);
                        });


                    });
                },
                getUsersIn: function (group) {
                    return $q(function (resolve, reject) {
                        var usersInGroups = [];
                        var usersArray = $firebaseArray(new Firebase(usersUrl));

                        usersArray.$loaded().then(function () {
                            for (var i = 0; i < usersArray.length; i++) {
                                var user = usersArray[i];
                                var groups = user.groups;

                                if (groups.indexOf(group) > -1) {
                                    usersInGroups.push(user);

                                }

                            }
                            resolve(usersInGroups);

                        }).catch(function (error) {
                            reject(error);
                        });


                    });
                },
                isInGroup: function (group) {
                    if (!$rootScope.user || !$rootScope.user.groups) {
                        return false;
                    }
                    return $rootScope.user.groups.indexOf(group) !== -1;


                }
                //setToReaderGroup: function (user) {
                //    if (user.uid) {
                //        user.id = user.uid;
                //    }
                //    return $q(function (resolve, reject) {
                //        var userUrl = usersUrl;
                //        var usersObj = $firebaseObject(new Firebase(userUrl));
                //
                //        usersObj[user.id] = user;
                //        usersObj.$save(user.id).then(function (uid) {
                //            resolve(uid);
                //        });
                //
                //    });
                //},

            };
        });
})();
