(function () {
    'use strict';

    angular.module('ad.promotion')
        .filter('userList', function (userAuth) {
            return function (list) {

                if (!userAuth ||  list.length === 0) {
                    return;
                }
                if (userAuth.profile.isManager()) {
                    return list;
                }

                return _.filter(list, function (el) {
                    return el.customerKey == userAuth.key;
                })
            };
        });
})();
