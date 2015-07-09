(function () {
    'use strict';

    angular.module('events')
        .controller('OneEventCtrl', function ($scope, $stateParams,ConnectionEventServ) {

            var eventId = $stateParams.eid;
            var evtObj=ConnectionEventServ.get(eventId);

            evtObj.$bindTo($scope,'event');



        });
})();

