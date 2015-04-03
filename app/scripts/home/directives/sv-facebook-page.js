(function () {
    'use strict';

    angular.module('home')
        .directive('svFacebookPage', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-facebook-page.html',
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
