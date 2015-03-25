(function () {
    'use strict';

    angular.module('#module#')
        .filter('#name#', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
