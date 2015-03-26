(function () {
    'use strict';

    angular.module('home')
        .directive('svSvetSocial', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-svet-social.html',
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
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
