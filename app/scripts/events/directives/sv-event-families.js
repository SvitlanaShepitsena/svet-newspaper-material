(function () {
    'use strict';

    angular.module('events')
        .directive('svEventFamilies', function (EventServ) {

            function fbArrLength($scope) {
                return _.filter($scope.familiesNumberObj, function (user) {
                    return _.isObject(user);
                });
            }

            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-families.html',
                scope: {
                    families: '@',
                    eventKey: '@'

                },
                link: function ($scope, el, attrs) {
                    var eventUsers = EventServ.getUsersObjectRef($scope.eventKey);
                    eventUsers.$bindTo($scope, 'familiesNumberObj').then(function () {
                        $scope.familiesLoaded = true;

                        $scope.familiesNumber = fbArrLength($scope);

                        eventUsers.$watch(function () {
                            $scope.familiesNumber = fbArrLength($scope);
                        })
                    });

                }
            };
        });
})();
