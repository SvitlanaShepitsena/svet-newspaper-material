(function () {
    'use strict';

    angular.module('auth.user')
        .controller('UserNewsCtrl', function ($scope, userAuth) {

            $scope.user = userAuth.profile;

        });
})();

