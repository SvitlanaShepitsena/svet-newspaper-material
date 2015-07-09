(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileExtentionServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                extend: function (profile) {
                    profile.isManager = function () {
                        return this.role === 'manager';
                    };
                    profile.isEditor = function () {
                        return this.role === 'editor';
                    };
                    profile.isAuthor = function () {
                        return this.role === 'author' || this.role === 'editor';
                    };
                    profile.isOnlyAuthor = function () {
                        return this.role === 'author';
                    };
                    profile.isCustomer = function () {
                        return this.role === 'customer';
                    };
                    profile.isReader = function () {
                        return this.role === 'reader';
                    };
                    return profile;
                }
            };
        });
})();
