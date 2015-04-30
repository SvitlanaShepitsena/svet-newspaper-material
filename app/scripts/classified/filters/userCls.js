(function () {
    'use strict';

    angular.module('classified')
        .filter('userCls', function (CurrentUserServ) {
            return function (allCls) {

                return _.filter(allCls,{user:{id:CurrentUserServ.get().id}});
            };
        });
})();
