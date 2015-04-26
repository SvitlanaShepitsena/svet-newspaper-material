(function () {
    'use strict';

    angular.module('auth')
        .controller('ManagerEventsCtrl', function ($scope,ConnectionEventServ) {
            var corporateEvents =  ConnectionEventServ.allCorporate();
            corporateEvents.$loaded().then(function (corporates) {
                $scope.corporates = corporates;
                console.log(corporates);
            })

        });
})();

