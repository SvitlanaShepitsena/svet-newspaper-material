(function () {
    'use strict';

    angular.module('social')
        .directive('svAddComment', function () {
            return {
                replace: true,
                templateUrl: 'scripts/social/directives/sv-add-comment.html',
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
