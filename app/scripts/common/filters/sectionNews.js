(function () {
    'use strict';

    angular.module('common')
        .filter('sectionNews', function () {
            return function (list) {
                return _.where(list, function (item) {
                    return item;
                });
            };
        });
})();
