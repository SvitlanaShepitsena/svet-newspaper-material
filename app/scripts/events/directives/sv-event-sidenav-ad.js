(function () {
    'use strict';

    angular.module('events')
        .directive('svEventSidenavAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-sidenav-ad.html',
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
