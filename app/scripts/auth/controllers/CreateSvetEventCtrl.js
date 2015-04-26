(function () {
    'use strict';

    angular.module('auth')
        .controller('CreateSvetEventCtrl', function (ConnectionEventServ, $scope, toastr,$state) {

            $scope.event = {
                type: 'corporate',
                title: 'Svet Connection',
                description: 'Description',
                date: new Date('01/01/2015'),
                startTime: new Date('01/06/2015 10:00:AM'),
                endTime: new Date('01/06/2015 1:00:PM'),
                address: 'Address'
            };
            $scope.createEvent = function (event) {
                if ($scope.eventForm.$valid) {

                    var date = (moment(event.date).format("MM/DD/YYYY"));
                    var startTime = (moment(event.startTime)).format('LT');
                    var endTime;

                    if (event.endTime) {
                        endTime = date + ' ' + (moment(event.endTime)).format('LT');
                    }
                    event = _.omit(event, ['date', 'startTime', 'endTime']);
                    event.startDate = (date + ' ' + startTime);
                    if (endTime) {
                        event.endTime = endTime;
                    }

                    ConnectionEventServ.saveEvent(event).then(function (data) {
                        toastr.info('Event has been created.');
                        $state.go('app.manager.events');

                    });
                } else {
                    toastr.error('All required fields must be filled');
                }


            };


        });
})
();

