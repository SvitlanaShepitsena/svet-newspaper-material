(function () {
    'use strict';

    angular.module('article')
        .directive('svImageUpload', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-image-upload.html',
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
