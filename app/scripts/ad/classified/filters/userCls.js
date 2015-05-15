(function () {
    'use strict';
    angular.module('ad.classified')
        .filter('userCls', function (userAuth) {
            return function (allCls) {
                if (userAuth.profile) {
                    var emp = [];
                    return emp;
                }
                return _.filter(allCls, {user: {id: userAuth.key}});
            };
        });
})();
