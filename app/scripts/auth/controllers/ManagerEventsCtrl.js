(function () {
    'use strict';

    angular.module('auth')
        .controller('ManagerEventsCtrl', function ($scope,ConnectionEventServ) {
            var corporateEvents =  ConnectionEventServ.all();
            corporateEvents.$loaded().then(function () {
                $scope.corporateEvents = corporateEvents;
            })

        });
})();

