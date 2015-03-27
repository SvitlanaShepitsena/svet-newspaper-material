(function () {
    'use strict';

    angular.module('home')
        .directive('svSocialBottomList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-social-bottom-list.html',
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
