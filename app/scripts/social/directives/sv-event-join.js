(function () {
    'use strict';

    angular.module('social')
        .directive('svEventJoin', function () {
            return {
                replace: true,
                templateUrl: 'scripts/social/directives/sv-event-join.html',
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
