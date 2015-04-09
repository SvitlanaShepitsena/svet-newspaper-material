(function () {
    'use strict';

    angular.module('events')
        .directive('svJoinBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-join-btn.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
