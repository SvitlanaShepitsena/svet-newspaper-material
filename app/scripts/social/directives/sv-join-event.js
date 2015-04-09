(function () {
    'use strict';

    angular.module('social')
        .directive('svJoinEvent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/social/directives/sv-join-event.html',
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
