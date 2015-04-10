(function () {
    'use strict';

    angular.module('archive')
        .directive('svPdfIssues', function () {
            return {
                replace: true,
                templateUrl: 'scripts/archive/directives/sv-pdf-issues.html',
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
