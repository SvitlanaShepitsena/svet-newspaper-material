(function () {
    'use strict';
    angular.module('sections.radio')
        .directive('svRadioOsa', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/radio/directives/sv-radio-osa.html',
                scope: {
                    title: '@',
                    subhead: '@',
                    body: '@'
                },
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
