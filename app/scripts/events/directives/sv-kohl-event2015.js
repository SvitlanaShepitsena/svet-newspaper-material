(function () {
    'use strict';

    angular.module('events')
        .directive('svKohlEvent2015', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-kohl-event-2015.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {

                    var ctrl = this;

                    ctrl.setRegisteredUsers = function (number) {
                        ctrl.userNumbers = number;
                    }

                    ctrl.addOneUser = function () {
                        ctrl.userNumbers++;

                    }
                    ctrl.substractUser = function () {
                        ctrl.userNumbers--;

                    }
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
