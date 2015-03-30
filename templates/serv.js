(function () {
    'use strict';

    angular.module('#module#')
        .factory('#name#Serv', function ($q, url) {
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
