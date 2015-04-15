(function () {
    'use strict';

    angular.module('events')
        .directive('svKohlEvent2015', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-kohl-event-2015.html',
                scope: {},
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {

                    var ctrl = this;

                    ctrl.setRegisteredUsers = function (number) {
                        ctrl.userNumbers = number;
                    }

                    $scope.$on('add-event-user', function () {
                        ctrl.userNumbers++;
                    });
                    $scope.$on('remove-event-user', function () {
                        ctrl.userNumbers--;
                    });
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
