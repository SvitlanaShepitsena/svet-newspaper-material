(function () {
    'use strict';

    angular.module('home')
        .directive('svHomeMainNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-home-main-news.html',
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
