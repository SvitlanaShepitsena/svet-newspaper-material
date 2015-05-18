(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileExtentionServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                extend: function (profile) {
                    profile.isManager = function () {
                        return this.role === 'manager';
                    };
                    profile.isAuthor = function () {
                        return this.role === 'author';
                    };

                    profile.isEditor = function () {
                        return this.role === 'editor';
                    };
                    return profile;
                }
            };
        });
})();
