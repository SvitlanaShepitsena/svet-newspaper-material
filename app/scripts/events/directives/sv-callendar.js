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

                    var currentYear = moment().year();
                    var currentMonth = moment().month();

                    //These variables MUST be set as a minimum for the calendar to work
                    $scope.calendarView = 'year';
                    $scope.calendarDay = new Date();
                    $scope.events = [
                        {
                            title: 'Field Museum Event',
                            type: 'special',
                            starts_at: new Date(2015, 4, 15, 9, 0),
                            ends_at: new Date(2015, 4, 15, 12, 0),
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
                        console.log(event);
                        //$state.go()
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
