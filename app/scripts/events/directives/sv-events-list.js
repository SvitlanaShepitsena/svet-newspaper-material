(function () {
    'use strict';
    angular.module('events')
        .directive('svEventsList', function (ConnectionEventServ) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-list.html',
                scope: {
                    events: '=',
                    eventFilter: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.isFuture = true;

                    $scope.svShowEvetsFrom= function (term) {
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
