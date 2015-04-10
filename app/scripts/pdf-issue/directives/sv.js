(function () {
    'use strict';

    angular.module('pdf-issue')
        .directive('sv', function () {
            return {
                replace: true,
                templateUrl: 'scripts/pdf-issue/directives/sv-.html',
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
