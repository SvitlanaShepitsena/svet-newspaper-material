(function () {
    'use strict';

    angular.module('article')
        .directive('svTopNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-top-news.html',
                scope: {},
                bindToController: {
                    mainNews:'=',
                    isFirst:'='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {

                    var ctrl = this;

                    if (ctrl.isFirst) {
                    ctrl.image = faker.image.city(400,238);
                    } else{
                    ctrl.image = faker.image.animals(400,238);
                    }

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
