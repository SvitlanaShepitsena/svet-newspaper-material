(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                replace: true,
                templateUrl: 'scripts/#moduleDirectirized#/directives/#dname#.html',
                scope: {},
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
