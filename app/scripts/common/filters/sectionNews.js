(function () {
    'use strict';
    angular.module('common')
        .filter('sectionNews', function () {
            return function (list, section) {
                if (!list || !section) return list;
                var finalList = _.filter(list, function (item) {
                    return item.section === section;
                });
                return finalList;
            };
        });
})();
