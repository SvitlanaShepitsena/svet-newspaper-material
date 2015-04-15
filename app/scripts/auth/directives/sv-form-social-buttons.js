(function () {
    'use strict';

    angular.module('auth')
        .directive('svFormSocialButtons', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-form-social-buttons.html',
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
