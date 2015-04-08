(function () {
    'use strict';

    angular.module('events')
        .directive('svCallendar', function (moment, $modal, $state) {
            return {
                templateUrl: 'scripts/events/directives/sv-callendar.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;


                    //These variables MUST be set as a minimum for the calendar to work
                    $scope.calendarView = 'year';
                    $scope.calendarDay = new Date();
                    $scope.events = [
                        {
                            title: '2015 Field Museum Event',
                            type: 'success',
                            starts_at: new Date(2015, 4, 15, 9, 0),
                            ends_at: new Date(2015, 4, 15, 12, 0),
                            editable: false,
                            deletable: false
                        },
                        {
                            title: 'Svet Media Group Corporate Meeting',
                            type: 'important',
                            starts_at: new Date(2015, 3, 15, 9, 0),
                            ends_at: new Date(2015, 3, 15, 11, 0),
                            editable: false,
                            deletable: false
                        },
                    ];


                    function showModal(action, event) {
                        $modal.open({
                            templateUrl: 'scripts/events/views/event-modal.html',
                            controller: function ($scope, $modalInstance) {
                                $scope.$modalInstance = $modalInstance;
                                $scope.action = action;
                                $scope.event = event;
                            }
                        });
                    }

                    $scope.eventClicked = function (event) {
                        if (event.title === '2015 Field Museum Event') {

                            $state.go('app.field-event',{year:2015});

                        }
                    };

                    $scope.eventEdited = function (event) {
                        showModal('Edited', event);
                    };

                    $scope.eventDeleted = function (event) {
                        showModal('Deleted', event);
                    };

                    $scope.setCalendarToToday = function () {
                        $scope.calendarDay = new Date();
                    };

                    $scope.toggle = function ($event, field, event) {
                        $event.preventDefault();
                        $event.stopPropagation();

                        event[field] = !event[field];
                    };


                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
