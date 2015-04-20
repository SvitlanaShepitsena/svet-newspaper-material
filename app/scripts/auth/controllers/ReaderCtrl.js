(function () {
    'use strict';

    angular.module('auth')
        .controller('ReaderCtrl', function ($scope) {
            $scope.profileMenus = [];

            $scope.profileMenus.push({
                icon: 'bell-ring',
                state: 'profile',
                menu: 'reader-profile'
            });

            $scope.profileMenus.push({
                icon: 'newspaper',
                state: 'subscriptions',
                menu: 'subscriptions'
            });
        });
})();

