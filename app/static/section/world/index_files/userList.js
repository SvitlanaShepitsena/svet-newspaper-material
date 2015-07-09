(function () {
    'use strict';
    angular.module('ad.promotion')
        .filter('userList', function (userAuth) {
            return function (list) {
                if (!userAuth || !list || list.length === 0) {
                    return;
                }
                if (userAuth.profile && userAuth.profile.isManager()) {
                    return list;
                }
                return _.filter(list, function (el) {
                    return el.customerKey == userAuth.key;
                })
            };
        });
})();
