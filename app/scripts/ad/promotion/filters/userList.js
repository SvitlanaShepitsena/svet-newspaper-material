(function () {
    'use strict';

    angular.module('ad.promotion')
        .filter('userList', function (userAuth) {
            return function (list) {
                var user = userAuth.profile;

                if (!userAuth ||  list.length === 0) {
                    return;
                }

                return _.filter(list, function (el) {
                    return el.customerKey == userAuth.key;
                })
            };
        });
})();
