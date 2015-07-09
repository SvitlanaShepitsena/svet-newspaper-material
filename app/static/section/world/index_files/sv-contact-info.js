(function () {
    'use strict';

    angular.module('common')
        .directive('svContactInfo', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-contact-info.html',
                scope: {
                    bgc: '@',
                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
