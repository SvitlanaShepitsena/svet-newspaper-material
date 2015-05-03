(function () {
    'use strict';
    angular.module('auth')
        .factory('UserGroupsServ', function ($q, url, $firebaseObject, $firebaseArray, $rootScope,UserServ,CurrentUserServ) {
            var usersUrl = url + '/user-management/users/';
            return {
                getGroups: function (user) {
                    var userId = user.key;
                    return $q(function (resolve, reject) {
                        var usersArr = $firebaseArray(new Firebase(usersUrl));
                        usersArr.$loaded().then(function () {
                            var userLocal = _(usersArr).find({id: userId});
                            if (userLocal && userLocal.groups) {
                                resolve(userLocal.groups);
                            } else{
                                UserServ.saveNewUser(user).then(function () {
                                    resolve(['reader']);
                                })
                            }
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });
                    });
                },
                toggleUserInGroup: function (user, group) {
                    console.log('run here UserGroupsServ.js');
                    return $q(function (resolve, reject) {
                        var userObject = $firebaseObject(new Firebase(usersUrl + user.key));
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
                    var currentUser = CurrentUserServ.get();
                    if (!currentUser || !currentUser.groups) {
                        return false;
                    }
                    return currentUser.groups.indexOf(group) !== -1;
                }
            };
        });
})();
