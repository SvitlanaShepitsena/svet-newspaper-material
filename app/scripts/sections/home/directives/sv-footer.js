(function () {
    'use strict';

    angular.module('home')
        .directive('svFooter', function () {
            return {
                replace: true,
                templateUrl: '..//directives/sv-footer.html',
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
