(function () {
    'use strict';
    angular.module('events')
        .directive('svEventsList', function (ConnectionEventServ) {
            return {
                replace: true,
                templateUrl: 'sv-events-list.html',
                scope: {
                    eventFilter: '@'
                },
                link: function ($scope, el, attrs) {
                    if ($scope.eventFilter === 'corporates') {
                        $scope.svetEvents = ConnectionEventServ.allCorporate();
                    }
                    else {
                        $scope.svetEvents = ConnectionEventServ.allPublic();
                    }
                }
            };
        });
})();
