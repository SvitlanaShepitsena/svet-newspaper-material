(function () {
    'use strict';
    angular.module('events')
        .directive('svEventsList', function (ConnectionEventServ, svetEventsConst) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-list.html',
                scope: {
                    events: '=',
                    eventFilter: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.isFuture = true;


                    $scope.$watchCollection(function () {
                        return svetEventsConst.evts;
                    }, function (newValue, oldValue) {
                        if (newValue !== oldValue) {
                            $scope.evtsReady = true;
                            console.log(newValue[0]);
                        }
                    });

                    $scope.svShowEvetsFrom = function (term) {
                        if (term === 'future') {
                            $scope.isFuture = true;
                        }
                        if (term === 'past') {
                            $scope.isFuture = false;
                        }

                    };
                }
            };
        });
})();
