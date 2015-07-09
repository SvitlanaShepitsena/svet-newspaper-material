(function () {
    'use strict';
    angular.module('events')
        .directive('svKohlEvent2015', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-kohl-event-2015.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.setRegisteredUsers = function (number) {
                        $scope.userNumbers = number;
                    }
                }
            };
        });
})();
