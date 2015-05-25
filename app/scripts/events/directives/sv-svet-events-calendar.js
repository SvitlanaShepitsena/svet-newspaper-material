(function () {
    'use strict';
    angular.module('events')
        .directive('svSvetEventsCalendar', function ($mdDialog, dt, ConnectionEventServ,svetEventsConst) {
            return {
                templateUrl: 'scripts/events/directives/sv-svet-events-calendar.html',
                link: function ($scope, el, attrs) {
                    ConnectionEventServ.setEventsLive().then(function () {
                        $scope.calendarView = 'year';
                        $scope.calendarDay = new Date();
                        $scope.events = svetEventsConst.evts ;
                            //[
                            //{
                            //    title: 'Event 1',
                            //    type: 'warning',
                            //    startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                            //    endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate()
                            //}
                        //];
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
                            dt.clickedDate = calendarDate;
                            $mdDialog.show({
                                controller: DialogController,
                                templateUrl: 'scripts/events/views/modalContent.html',
                            });
                        }
                        function DialogController($scope, $mdDialog, dt) {
                            $scope.clickedDate = dt.clickedDate;
                            $scope.hide = function () {
                                $mdDialog.hide();
                            };
                            $scope.cancel = function () {
                                $mdDialog.cancel();
                            };
                            $scope.answer = function (answer) {
                                $mdDialog.hide(answer);
                            };
                        }
                    });
                }
            };
        }
    )
    ;
})();
