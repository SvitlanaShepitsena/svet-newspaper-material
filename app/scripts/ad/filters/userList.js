(function () {
    'use strict';

    angular.module('ad')
        .filter('userList', function (CurrentUserServ) {
            return function (list) {
                var user = CurrentUserServ.get();
                if (!user || !user.key || list.length === 0) {
                    return;
                }

                return _.filter(list, function (el) {
                    return el.customer.key == user.key;
                })
            };
        });
})();
