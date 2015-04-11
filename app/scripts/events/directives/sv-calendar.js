(function () {
    'use strict';

    angular.module('events')
        .directive('svCalendar', function (moment, $modal, $state) {
            return {
                templateUrl: 'scripts/events/directives/sv-calendar.html',
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
                            title: "2015 Kohl Children's Museum Event (Public Event)",
                            type: 'success',
                            starts_at: new Date(2015, 4, 15, 11, 0),
                            ends_at: new Date(2015, 4, 15, 13, 0),
                            editable: false,
                            deletable: false
                        },
                        {
                            title: "2015 Ravinia SVET CONNECTIONS (Networking Event)",
                            type: 'success',
                            starts_at: new Date(2015, 4, 17, 19, 0),
                            ends_at: new Date(2015, 4, 17, 23, 0),
                            editable: false,
                            deletable: false
                        }
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
                        if (event.title === "2015 Kohl Children's Museum Event (Public Event)") {
                            $state.go('app.field-event', {year: 2015});
                        }
                        if (event.title === "2015 Ravinia SVET CONNECTIONS (Networking Event)") {
                            $state.go('app.ravinia-event', {year: 2015});
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
