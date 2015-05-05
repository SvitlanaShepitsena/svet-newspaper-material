(function () {
    'use strict';
    angular.module('home')
        .directive('svSvetSocial', function ($mdBottomSheet) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-svet-social.html',
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                },
                link: function ($scope, element, attr) {
                }
            };
        });
})();
