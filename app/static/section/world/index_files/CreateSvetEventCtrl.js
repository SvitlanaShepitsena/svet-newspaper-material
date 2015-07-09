(function () {
    'use strict';
    angular.module('auth')
        .controller('CreateSvetEventCtrl', function (ConnectionEventServ, $scope, toastr, $state) {
            $scope.event = {
                type: 'corporates',
                title: 'Svet Connection Meeting',
                description: 'Svet Connection networking event helps to increase collaboration among Svet Russian Media Group Partners and build lasting relationships where all parties can help one another',
                date: new Date('01/06/2015'),
                startTime: new Date('01/06/2015 10:00:AM'),
                endTime: new Date('01/06/2015 1:00:PM'),
                address: 'Viper Alley. 275 Parkway Dr Lincolnshire, IL 60069',
                admission: 'Svet Partners'
            };
            $scope.createNewEvent = function () {
                var event= $scope.event;
                if ($scope.eventForm.$valid) {
                    event = formatEvent(event);
                    if (event.type === 'corporate') {
                        ConnectionEventServ.saveCorporateEvent(event).then(function (data) {
                            toastr.info('Event has been created.');
                            $state.go('app.manager.events');
                        });
                    } else{

                        ConnectionEventServ.savePublicEvent(event).then(function (data) {
                            toastr.info('Event has been created.');
                            $state.go('app.manager.events');
                        });
                    }
                } else {
                    toastr.error('All required fields must be filled');
                }
            };
            function formatEvent(event) {
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
                event.sentInvitations = false;
                return event;
            }
        });
})
();

