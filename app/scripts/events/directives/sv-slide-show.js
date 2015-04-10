(function () {
    'use strict';

    angular.module('events')
        .directive('svSlideShow', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-slide-show.html',
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
