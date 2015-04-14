(function () {
    'use strict';

    angular.module('home')
        .directive('svImgFramed', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-img-framed.html',
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
