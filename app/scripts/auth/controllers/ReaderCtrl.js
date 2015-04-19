(function () {
    'use strict';

    angular.module('auth')
        .controller('ReaderCtrl', function ($scope) {
            $scope.profileMenus = [];

            $scope.profileMenus.push({
                icon:'account',
                state:'profile',
                menu:'reader-profile'
            });

            $scope.profileMenus.push({
                icon:'email',
                state:'subscriptions',
                menu:'subscriptions'
            });




        });
})();

