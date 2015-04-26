(function () {
    'use strict';

    angular.module('auth')
        .controller('ManagerEventsCtrl', function ($scope, ConnectionEventServ) {
            $scope.corporates = ConnectionEventServ.allCorporate();
            $scope.publicEvts = ConnectionEventServ.allPublic();

        });
})();

