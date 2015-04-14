(function () {
    'use strict';

    angular.module('home')
        .directive('svWeaterSvet', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-weater-svet.html',
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
