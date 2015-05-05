(function () {
    'use strict';

    angular.module('#module#')
        .filter('#lname#', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
