(function () {
    'use strict';

    angular.module('home')
        .directive('svFromTheEditor', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-from-the-editor.html',
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
