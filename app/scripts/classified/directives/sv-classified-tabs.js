(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-tabs.html',
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
