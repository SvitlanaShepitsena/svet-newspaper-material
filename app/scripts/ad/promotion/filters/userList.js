(function () {
    'use strict';

    angular.module('ad.promotion')
        .filter('userList', function (userAuth) {
            return function (list) {
                var user = userAuth.profile;
                if (!user || !user.key || list.length === 0) {
                    return;
                }

                return _.filter(list, function (el) {
                    return el.customer.key == user.key;
                })
            };
        });
})();
