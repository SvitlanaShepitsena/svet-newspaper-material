(function () {
    'use strict';
    angular.module('auth')
        .controller('BusinessAdCtrl', function ($scope, userAuth) {
            $scope.user = userAuth.profile;
        });
})();

