(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                replace: true,
                templateUrl: 'scripts/#moduleDirectirized#/directives/#dname#.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
