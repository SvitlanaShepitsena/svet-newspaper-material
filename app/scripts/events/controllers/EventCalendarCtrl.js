(function () {
    'use strict';
    angular.module('events')
        .controller('EventCalendarCtrl', function ($scope,$modal,$templateCache) {
            $templateCache.put('modalContent.html','<div class="modal-header"> ' +
                '<h3 class="modal-title">Event action occurred!</h3> ' +
                '</div> <div class="modal-body"> <p>Action: <pre>{{ action }}</pre></p> <p>Event: <pre>{{ event | json }}</pre></p> ' +
                '</div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="$modalInstance.close()">OK</button> </div>');

            $scope.calendarView = 'month';
            $scope.calendarDay = new Date();
            $scope.events = [
                {
                    title: 'Event 1',
                    type: 'warning',
                    startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                    endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate()
                },
                {
                    title: 'Event 2',
                    type: 'info',
                    startsAt: moment().subtract(1, 'day').toDate(),
                    endsAt: moment().add(5, 'days').toDate()
                },
                {
                    title: 'This is a really long event title',
                    type: 'important',
                    startsAt: moment().startOf('day').add(5, 'hours').toDate(),
                    endsAt: moment().startOf('day').add(19, 'hours').toDate()
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

            $scope.toggle = function($event, field, event) {
                $event.preventDefault();
                $event.stopPropagation();
                event[field] = !event[field];
            };



        });
})();

