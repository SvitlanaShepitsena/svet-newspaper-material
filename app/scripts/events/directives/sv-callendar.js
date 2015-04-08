(function () {
    'use strict';

    angular.module('events')
        .directive('svCallendar', function (moment,$modal) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-callendar.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;


                    $scope.events = [
                        {
                            title: 'My event title', // The title of the event
                            type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
                            starts_at: new Date(2015,5,1,1), // A javascript date object for when the event starts
                            ends_at: new Date(2015,5,26,15), // A javascript date object for when the event ends
                            editable: true, // If calendar-edit-event-html is set and this field is explicitly set to false then dont make it editable
                            deletable: true // If calendar-delete-event-html is set and this field is explicitly set to false then dont make it deleteable
                        }
                    ];
                    $scope.calendarView = 'month';


                    var currentYear = moment().year();
                    var currentMonth = moment().month();

                    //These variables MUST be set as a minimum for the calendar to work
                    $scope.calendarView = 'month';
                    $scope.calendarDay = new Date();
                    $scope.events = [
                        {
                            title: 'Event 1',
                            type: 'warning',
                            starts_at: new Date(currentYear,currentMonth,25,8,30),
                            ends_at: new Date(currentYear,currentMonth,25,9,30)
                        },
                        {
                            title: 'Event 2',
                            type: 'info',
                            starts_at: new Date(currentYear,currentMonth,19,7,30),
                            ends_at: new Date(currentYear,currentMonth,25,9,30)
                        },
                        {
                            title: 'This is a really long event title',
                            type: 'important',
                            starts_at: new Date(currentYear,currentMonth,25,6,30),
                            ends_at: new Date(currentYear,currentMonth,25,6,60)
                        }
                    ];



                    function showModal(action, event) {
                        $modal.open({
                            templateUrl: 'modalContent.html',
                            controller: function($scope, $modalInstance) {
                                $scope.$modalInstance = $modalInstance;
                                $scope.action = action;
                                $scope.event = event;
                            }
                        });
                    }

                    $scope.eventClicked = function(event) {
                        showModal('Clicked', event);
                    };

                    $scope.eventEdited = function(event) {
                        showModal('Edited', event);
                    };

                    $scope.eventDeleted = function(event) {
                        showModal('Deleted', event);
                    };

                    $scope.setCalendarToToday = function() {
                        $scope.calendarDay = new Date();
                    };

                    $scope.toggle = function($event, field, event) {
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
