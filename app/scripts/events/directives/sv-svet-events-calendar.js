(function () {
    'use strict';
    angular.module('events')
        .directive('svSvetEventsCalendar', function ($mdDialog, dt, ConnectionEventServ, svetEventsConst, toastr) {
            return {
                templateUrl: 'scripts/events/directives/sv-svet-events-calendar.html',
                link: function ($scope, el, attrs) {
                    $scope.calendarYear = function () {
                        $scope.calendarView = 'year';
                    };
                    $scope.calendarMonth = function () {
                        $scope.calendarView = 'month';
                    };
                    ConnectionEventServ.setEventsLive().then(function () {
                        $scope.calendarView = 'year';
                        $scope.calendarDay = new Date();
                        $scope.events = svetEventsConst.evts;
                        $scope.eventClicked = function (domEvt, event) {
                            var eventInfo = "Event:" + event.title+"</br>";
                            eventInfo += "Address:" + event.address;
                            showModal(eventInfo);
                        };
                        $scope.eventEdited = function (event) {
                            showModal('Edited', event);
                        };
                        $scope.eventDeleted = function (event) {
                            ConnectionEventServ.removePublicWithKey(event.$id).then(function () {
                                toastr.info('Events removed');
                            });
                        };
                        $scope.newEvent = function (calendarDate) {
                            var now = moment();
                            var hours = now.hour();
                            var minutes = now.minute();
                            dt.clickedDate = calendarDate || now.subtract(hours, 'hours').subtract(minutes, 'minutes').toDate();
                            $mdDialog.show({
                                controller: DialogController,
                                templateUrl: 'scripts/events/views/modalContent.html',
                            });
                        }
                        function showModal(event) {
                            dt.vm=event;
                            $mdDialog.show({
                                controller: DialogControllerInfo,
                                templateUrl: 'scripts/events/views/modalContentInfo.html',
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
                        function DialogControllerInfo($scope, $mdDialog, dt) {
                            $scope.event = dt.vm;
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
