(function () {
    'use strict';

    angular.module('auth')
        .controller('ReaderCtrl', function ($scope) {
            $scope.profileMenus = [];

            $scope.profileMenus.push({
                icon: 'newspaper',
                state: 'subscriptions',
                menu: 'subscriptions'
            });
            $scope.profileMenus.push({
                icon: 'bell',
                state: 'reader-activity-events',
                menu: 'activity-events'
            });
            $scope.profileMenus.push({
                icon: 'bookmark',
                state: 'reader-bookmarks',
                menu: 'bookmarks'
            });
            $scope.profileMenus.push({
                icon: 'tag',
                state: 'reader-classified',
                menu: 'my-classified'
            });
            $scope.profileMenus.push({
                icon: 'settings',
                state: 'profile',
                menu: 'profile-settings'
            });
        });
})();

