(function () {
    'use strict';

    angular.module('#module#')
        .factory('#name#Serv', function ($q) {
            return {
                getSync: function () {

                },
                get: function () {
                    return $q(function (resolve, reject) {

                    });
                }
            };
        });
})();
