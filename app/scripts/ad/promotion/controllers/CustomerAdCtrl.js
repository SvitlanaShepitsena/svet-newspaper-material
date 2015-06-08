(function () {
    'use strict';
    angular.module('auth')
        .controller('CustomerAdCtrl', function ($scope, userAuth) {
            $scope.user = userAuth.profile;
        });
})();

