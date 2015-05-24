

(function () {
    'use strict';
    angular.module('events')
        .directive('svSvetEventsCalendar', function ($mdDialog) {
            return {
                templateUrl: 'scripts/events/directives/sv-svet-events-calendar.html',
                link: function ($scope, el, attrs) {
                    $scope.calendarView = 'year';
                    $scope.calendarDay = new Date();
                    $scope.events = [
                        //{
                        //    title: 'Event 1',
                        //    type: 'warning',
                        //    startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                        //    endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate()
                        //}
                    ];

                    //$scope.eventClicked = function (event) {
                    //    showModal('Clicked', event);
                    //};
                    //$scope.eventEdited = function (event) {
                    //    showModal('Edited', event);
                    //};
                    //$scope.eventDeleted = function (event) {
                    //    showModal('Deleted', event);
                    //};



                    $scope.newEvent = function (calendarDate) {
                        $mdDialog.show({

                            controller: DialogController,
                            templateUrl: 'scripts/events/views/modalContent.html',
                        })
                            .then(function (answer) {
                                console.log(answer);
                                $scope.alert = 'You said the information was "' + answer + '".';
                            }, function () {
                                $scope.alert = 'You cancelled the dialog.';
                            });
                    }


                    function DialogController($scope, $mdDialog) {
                        $scope.hide = function() {
                            $mdDialog.hide();
                        };
                        $scope.cancel = function() {
                            $mdDialog.cancel();
                        };
                        $scope.answer = function(answer) {
                            $mdDialog.hide(answer);
                        };
                    }
                }


            };
        }
    )
    ;
})();
