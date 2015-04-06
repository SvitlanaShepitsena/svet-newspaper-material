(function () {
    'use strict';

    angular.module('home')
        .directive('svLangSwitch', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-lang-switch.html',
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
