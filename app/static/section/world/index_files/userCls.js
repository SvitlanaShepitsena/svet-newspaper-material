(function () {
    'use strict';
    angular.module('ad.classified')
        .filter('userCls', function (userAuth) {
            return function (allCls) {
                return _.filter(allCls, {userKey: userAuth.key});
            };
        });
})();
