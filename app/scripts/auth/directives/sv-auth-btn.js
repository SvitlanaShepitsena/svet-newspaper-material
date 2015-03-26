(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthBtn', function ($mdToast) {
            return {
                templateUrl: 'scripts/auth/directives/sv-auth-btn.html',
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
