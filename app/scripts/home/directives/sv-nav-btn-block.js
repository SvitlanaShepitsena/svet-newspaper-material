(function () {
    'use strict';

    angular.module('home')
        .directive('svNavBtnBlock', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-nav-btn-block.html',
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
