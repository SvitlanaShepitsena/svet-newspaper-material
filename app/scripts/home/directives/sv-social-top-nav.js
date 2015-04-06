(function () {
    'use strict';

    angular.module('home')
        .directive('svSocialTopNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-social-top-nav.html',
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
