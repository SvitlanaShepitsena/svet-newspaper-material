(function () {
    'use strict';

    angular.module('#module#')
        .filter('#lname#', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
