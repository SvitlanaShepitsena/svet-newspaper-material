(function () {
    'use strict';

    angular.module('article')
        .directive('sv', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-.html',
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
