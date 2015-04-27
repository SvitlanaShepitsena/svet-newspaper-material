(function () {
    'use strict';

    angular.module('#module#')
        .directive('#jname#', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
