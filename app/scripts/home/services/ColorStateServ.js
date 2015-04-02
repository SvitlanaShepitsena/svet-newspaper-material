(function () {
    'use strict';

    angular.module('home')
        .factory('ColorStateServ', function ($q, url) {
            var baseColor = tinycolor('#009688');
            var counter = 1;
            return {
                getColor: function () {
                    //counter =+3;
                    return baseColor.lighten(counter);
                }
            };
        });
})();
